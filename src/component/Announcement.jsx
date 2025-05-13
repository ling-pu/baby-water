const text = 'Baby Water官網會員招募中 ♡ 單件即免運 ♡ 多件再折扣 ‧　';

export default function Announcement() {
    return (
        <div className="announcement">
            <div className="announcement__marquee">
                <div className="announcement__track">
                    <span>{text.repeat(10)}</span>
                    <span>{text.repeat(10)}</span> {/* 重複一次實現無縫銜接 */}
                </div>
            </div>
        </div>
    )
}