const text = 'Baby Water 官網會員招募中 ♡ 單件即免運 ♡ 多件再折扣 ‧　';

export default function Announcement() {
    return (
        <div className="announcement enable-animation">
            <div className="marquee">
                <ul className="marquee__content">
                    <div className="marquee__item">
                        <span>{text}</span>
                    </div>
                    <div className="marquee__item">
                        <span>{text}</span>
                    </div>
                    <div className="marquee__item">
                        <span>{text}</span>
                    </div>
                </ul>
                {/* 隱藏 aria-hidden */}
                <ul aria-hidden="true" className="marquee__content">
                    <div className="marquee__item">
                        <span>{text}</span>
                    </div>
                    <div className="marquee__item">
                        <span>{text}</span>
                    </div>
                    <div className="marquee__item">
                        <span>{text}</span>
                    </div>
                </ul>

            </div>
        </div>
    )
}