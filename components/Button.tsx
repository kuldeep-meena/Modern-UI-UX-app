import Image from "next/image"
export interface ButtonProps {
    type: "button" | "submit"
    title: string
    icon?: string
    variant: "btn_dark_green"
}
const Button = ({ type, title, icon, variant }: ButtonProps) => {
    return (
        <button
            className={`flexCenter gap-3 rounded-full border ${variant} width:{50%}`}
            type={type}
        >
            {icon && <Image src={icon} alt={title} height={24} width={24}></Image>}
            <label className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    )
}

export default Button