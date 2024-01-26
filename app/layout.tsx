import { Urbanist } from 'next/font/google';
import Head from "next/head";

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';

import './globals.css';
import ToastProvider from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
    title: 'Store',
    description: 'Store',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Head>
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=UA-300288021-1`} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-300288021-1', {
                            page_path: window.location.pathname,
                        });
                        `
                    }}
                />
            </Head>
            <body className={font.className}>
                <ModalProvider />
                <ToastProvider />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
