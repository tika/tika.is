import { Title } from "../components/Title";

export default function Contact({ className }: { className: string }) {
    return (
        <>
            <Title text="Contact me" />
            <div className={`${className} flex flex-col gap-4`}>
                <h1 className="text-3xl font-semibold mt-10">Contact</h1>
                <p>
                    You can contact me by sending me an email at
                    captika@outlook.com. You can also add me on my Discord for
                    quicker responses: tika#5703
                </p>
            </div>
        </>
    );
}
