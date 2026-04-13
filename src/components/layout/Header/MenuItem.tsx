import Link from "next/link";

interface menuItemProps {
    url: string
    text: string
    closeMenu: () => void
}

export default function MenuItem({ url, text, closeMenu }:menuItemProps) {
    return (
        <li>
            <Link
                href={ url }
                className="inline-block w-10/12 px-8 py-6 border-t border-b border-P3 hover:bg-[#25153B4D] ease-out duration-300 md:p-0 md:w-auto md:border-none md:text-2xl md:text-W4 hover:text-white"
                onClick={ closeMenu }
            >
                { text }
            </Link>
        </li>
    )
}