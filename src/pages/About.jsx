import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h1>关于我</h1>
          <p className="about-intro">让我来介绍一下自己</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>个人简介</h2>
            <p>
              我是一名充满热情的全栈开发者，专注于创造优秀的用户体验和高质量的代码。
              我喜欢学习新技术，解决复杂问题，并将想法转化为现实。
            </p>
            <p>
              在我的职业生涯中，我参与过多个项目的开发，从概念设计到最终部署，
              积累了丰富的经验和技能。我相信技术可以改变世界，让生活变得更美好。
            </p>
          </div>

          <div className="about-section">
            <h2>教育背景</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2020 - 2024</div>
                <div className="timeline-content">
                  <h3>计算机科学学士</h3>
                  <p>某某大学</p>
                  <p>主修计算机科学，专注于软件工程和Web开发</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2018 - 2020</div>
                <div className="timeline-content">
                  <h3>高中毕业</h3>
                  <p>某某中学</p>
                  <p>理科重点班，对编程产生浓厚兴趣</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>工作经历</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2023 - 至今</div>
                <div className="timeline-content">
                  <h3>全栈开发工程师</h3>
                  <p>某某科技公司</p>
                  <p>负责前端和后端开发，参与多个重要项目的设计和实现</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2022 - 2023</div>
                <div className="timeline-content">
                  <h3>前端开发实习生</h3>
                  <p>某某互联网公司</p>
                  <p>学习并实践前端开发技术，参与产品功能开发</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>兴趣爱好</h2>
            <div className="interests">
              <div className="interest-item">
                <span className="interest-icon">📚</span>
                <span>阅读技术书籍</span>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🎮</span>
                <span>游戏开发</span>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🏃</span>
                <span>跑步健身</span>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🎵</span>
                <span>音乐欣赏</span>
              </div>
              <div className="interest-item">
                <span className="interest-icon">✈️</span>
                <span>旅行探索</span>
              </div>
              <div className="interest-item">
                <span className="interest-icon">☕</span>
                <span>咖啡文化</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

