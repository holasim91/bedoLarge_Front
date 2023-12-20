import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <div>이런! 잘못된 경로로 들어가셨군요!</div>
            <Link href="/">돌아가기</Link>
        </div>
    )
}