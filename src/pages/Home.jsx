import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="avatar-container">
            <div className="avatar">
              <span>👤</span>
            </div>
          </div>
          <h1 className="hero-title">欢迎来到我的个人博客</h1>
          <p className="hero-subtitle">我是一名充满热情的开发者和创作者</p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">了解更多</a>
            <a href="#portfolio" className="btn btn-secondary">查看作品</a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💼</div>
            <h3>专业技能</h3>
            <p>拥有丰富的开发经验和专业技能，致力于创造优秀的作品</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>创意设计</h3>
            <p>注重用户体验和视觉设计，打造美观实用的产品</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>持续学习</h3>
            <p>保持对新技术的好奇心，不断学习和提升自己</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2 className="section-title">技能专长</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <span className="skill-name">前端开发</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">UI/UX设计</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">后端开发</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <span className="skill-name">项目管理</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

