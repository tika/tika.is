import Link from "next/link.js";

export default function About({ className }: { className: string }) {
    return (
        <div className={`${className} flex flex-col gap-4`}>
            <h1 className="text-3xl font-semibold mt-10">About</h1>
            <p>
                I&apos;m a 16 year-old full-stack developer from the United
                Kingdom. I try to make products that are not only fun, but
                practical. Alongside being a developer, I&apos;m a
                secondary-school student (year 12), where I study Maths, F.
                Maths, Physics & CompSci. I began programming in year 7 where I
                learned about Scratch & Python, but I began focusing on it
                during the first lockdown, 2020. I began learning Java &
                generally Object Oriented Programming, but since then have
                pivoted to web development, with{" "}
                <Link href="/projects/preplar">
                    <span className="underline cursor-pointer hover:text-theme">
                        Preplar
                    </span>
                </Link>{" "}
                being my first project.
            </p>
        </div>
    );
}
