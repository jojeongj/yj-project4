import Naverblog from "../png/naver.png"

export default function NaverblogAsset() {
    return (
        <div>
            <img src={Naverblog} alt="Facebook Logo" className="w-6 h-6 group-hover:w-10 group-hover:h-10 transition-all duration-200" />
        </div>
    )
}