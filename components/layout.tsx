import { ReactNode } from 'react';
import { Glory, Roboto } from '@next/font/google';
import Footer from './footer';



const fontTitle = Glory({
    weight: ['700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-title',
});
const fontBody = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
});



export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={`page-wrapper ${fontTitle.variable} ${fontBody.variable} container my-12 xs:my-24`}>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
