import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/media/vinya_logo_v1_transparent_bg.png';



export default function Home() {
    return (
        <>
            <Head>
                <title>Vinya Foundation</title>
                <meta name="description" content="Vinya Foundation is a non-profit organisation that works in the areas of education and mental health." />
            </Head>
            <section>
                <header className="flex flex-col items-center">
                    <h1 className="xs:w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3">
                        <Image
                            src={logo}
                            width={800}
                            alt="Vinya Foundation logo"
                        />
                        <span className="sr-only">
                            Vinya Foundation
                        </span>
                    </h1>
                </header>
                <section className="max-w-prose mx-auto text-center">
                    <h2 className="mt-20 text-2xl">
                        Website Coming Soon
                    </h2>
                </section>
            </section>
        </>
    );
}
