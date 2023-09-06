import Link from "next/link";
import MainNavigationBar from "./MainNavigationBar";

export default function Header(){
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-rose-900">
            <Link href={'/'} className="text-white uppercase font-bold">test-next</Link>
            <MainNavigationBar />
        </header>
    );
};

