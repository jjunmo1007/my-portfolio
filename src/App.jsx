import './App.css'

const profileSections = [
  { id: 'interests', number: '01', label: 'INTERESTS', title: '좋아하는 것에 푹 빠져요', description: '게임과 코딩에 관심이 있어요. 좋아하는 것을 더 깊이 알아가고, 직접 만들어 보는 일에도 도전하고 싶어요.', tags: ['게임', '코딩'] },
  { id: 'strengths', number: '02', label: 'STRENGTHS & LEARNING', title: '문제를 풀고, 새롭게 배워요', description: '문제의 답을 찾아가는 것을 잘해요. 앞으로 코딩을 더 배우면서 떠올린 아이디어를 직접 만들어 보고 싶어요.', tags: ['문제 해결', '코딩을 배우는 중'] },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="my portfolio 홈">
            <span className="brand-symbol" aria-hidden="true">✳</span> my portfolio<span className="brand-dot">.</span>
          </a>
          <nav aria-label="페이지 메뉴">
            <a href="#about">나를 소개해요</a>
            <a href="#activities">해본 활동</a>
            <a href="#goals">앞으로의 목표</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> HELLO, NICE TO MEET YOU!</p>
            <h1 id="hero-title">안녕하세요,<br /><span className="name-highlight">송준모</span>입니다<span className="hero-period">.</span></h1>
            <p className="hero-description">관심 있는 일에 깊이 몰입하는 사람</p>
            <p className="hero-note">게임과 코딩을 좋아하고, 문제를 해결하며 새로운 것을 배워가고 있어요.</p>
            <a className="button button-primary" href="#about">저를 더 알아보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-sun" />
            <div className="art-card">
              <span className="art-spark">✳</span>
              <span className="art-kicker">MY LITTLE INTRO</span>
              <p>생각하고<br />만들고<span>!</span></p>
              <div className="art-tags"><span>GAME</span><span>CODE</span></div>
            </div>
            <span className="art-star star-one">✦</span>
            <span className="art-star star-two">✳</span>
            <span className="art-caption">CURIOUS & CREATIVE</span>
          </div>
        </section>

        <section className="about-section page-width" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2 id="about-title">저를 소개할게요<span>.</span></h2>
            <p className="section-intro">관심 있는 일에 몰입하고, 배우며 한 걸음씩 나아가고 있어요.</p>
          </div>
          <div className="profile-grid">
            {profileSections.map((section) => (
              <article className="profile-card" key={section.id}>
                <div className="card-topline"><span>{section.number}</span><span>{section.label}</span></div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <div className="tag-list">
                  {section.tags.map((tag) => <span className="profile-tag" key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="activity-section" id="activities" aria-labelledby="activities-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">THINGS I HAVE TRIED</p>
              <h2 id="activities-title">해본 활동과 작품<span>.</span></h2>
              <p className="section-intro">직접 해본 경험을 하나씩 모아가는 중이에요.</p>
            </div>
            <article className="activity-card">
              <div className="activity-icon" aria-hidden="true">✎</div>
              <div>
                <span className="activity-label">학교 활동</span>
                <h3>학교 과제와 발표</h3>
                <p>과제나 발표의 이름, 내용, 사진은 준비되면 여기에 추가할 수 있어요.</p>
              </div>
              <span className="activity-number" aria-hidden="true">01</span>
            </article>
          </div>
        </section>

        <section className="goal-section page-width" id="goals" aria-labelledby="goals-title">
          <div className="goal-mark" aria-hidden="true">✳</div>
          <p className="eyebrow">WHAT'S NEXT?</p>
          <h2 id="goals-title">앞으로의 목표<span>.</span></h2>
          <p className="goal-copy">나만의 웹사이트 만들기</p>
          <p className="goal-description">배운 것을 활용해 나다운 공간을 직접 만들어 보고 싶어요.</p>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">my portfolio<span className="brand-dot">.</span></a>
        <p>관심 있는 것을 배우고 만들어 가는 송준모</p>
        <a className="back-top" href="#home">맨 위로 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App
