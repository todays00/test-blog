import { Link } from "react-router-dom";

export default function PostDetail() {
    return (
        <>
            <div className="post__detail">
                <div className="post__box">
                    <div className="post__title">
                        “이게 진짜 싼타페” 쏘렌토 계약 후회할 수준
                    </div>
                    <div className="post__profile-box">
                        <div className="post__profile" />
                        <div className="post__author-name">이지훈</div>
                        <div className="post__date">2024.07.11 목요일</div>
                    </div>
                    <div className="post__utils-box">
                        <div className="post__delete">삭제</div>
                        <div className="post__edit">
                            <Link to={'/posts/edit/'}>수정</Link>
                        </div>
                    </div>
                    <div className="post__text">
                        국내 중형 SUV 시장은 신형 싼타페와 신형 쏘렌토가 차지하고 있다.
                        싼타페는 풀체인지, 쏘렌토는 페이스 리프트 모델인데 보통 풀체인지를
                        거친 신차에 대한 수요가 더 높다. 하지만 위 두 모델은 그 관계가 역전
                        됐다. 지난 6월 실적 기준, 쏘렌토 7307대, 싼타페 5000대를 기록했다.
                        사실 두 모델 모두 대대적인 변경을 거친 이후 관계가 역전된 적이 없었다.
                    </div>
                </div>
            </div>
        </>
    );
}