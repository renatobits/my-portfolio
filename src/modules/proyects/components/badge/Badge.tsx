import './badge.css'


interface BadgeProps {
    title: string;
}
export default function Badge({ title }: BadgeProps) {
    return (
        <li className='badge'>
            {title}
        </li>
    )
}