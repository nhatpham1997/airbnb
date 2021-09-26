import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home({ exploreData }) {
    return (
        <div>
            <Head>
                <title> Papa Airbnb </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Banner />
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    {exploreData?.map((item) => (
                        <h1>{item.location}</h1>
                    ))}
                </section>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const exploreData = await fetch("https://links.papareact.com/pyp").then(
        (res) => res.json()
    )
    return {
        props: {
            exploreData
        }
    }
}
