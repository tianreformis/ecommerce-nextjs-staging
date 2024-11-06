/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginWithGoogle, signIn } from "@/services/auth/services";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const user: any = await signIn(email);
                if (user) {
                    const passwordConfirm = await compare(password, user.password);
                    if (passwordConfirm) {
                        return user;
                    }
                    return null;
                } else {
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',

        }),
    ],
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === "credentials") {
                token.email = user.email;
                token.fullname = user.fullname;
                token.phone = user.phone;
                token.role = user.role;
                token.id = user.id;
            }

            if (account?.provider === "google") {
                const data = {
                    fullname: user.name,
                    email: user.email,
                    type: 'google',
                    created_at: user.created_at,
                    updated_at: user.updated_at
                };

                await LoginWithGoogle(
                    data,
                    (data: any) => {
                        token.email = data.email;
                        token.fullname = data.fullname;
                        token.role = data.role;
                        token.created_at = data.created_at;
                        token.updated_at = data.updated_at;
                    });
            }


            return token;
        },
        async session({ session, token }: any) {
            if ("email" in token) {
                session.user.email = token.email;
            }
            if ("fullname" in token) {
                session.user.fullname = token.fullname;
            }
            if ("phone" in token) {
                session.user.phone = token.phone;
            }
            if ("role" in token) {
                session.user.role = token.role;
            }
            if ("id" in token) {
                session.user.id = token.id;
            }

            const accessToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || '',{
                algorithm: 
                'HS256',
            });
            
            session.accessToken = accessToken;
            
            return session;

        }
    },

    pages: {
        signIn: '/auth/login',
    },
}

export default NextAuth(authOptions);