import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: '电商平台',
      description: '一个功能完整的电商平台，包含用户管理、商品展示、购物车和支付功能。',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: '任务管理应用',
      description: '一个美观的任务管理应用，支持任务创建、编辑、删除和分类功能。',
      image: '📋',
      tags: ['Vue.js', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: '个人博客系统',
      description: '使用现代技术栈构建的个人博客系统，支持文章发布和管理。',
      image: '📝',
      tags: ['React', 'Express', 'MySQL'],
      link: '#'
    },
    {
      id: 4,
      title: '天气应用',
      description: '实时天气查询应用，提供详细的天气信息和未来7天预报。',
      image: '🌤️',
      tags: ['JavaScript', 'API'],
      link: '#'
    },
    {
      id: 5,
      title: '音乐播放器',
      description: '美观的音乐播放器，支持播放列表管理和音乐搜索功能。',
      image: '🎵',
      tags: ['React', 'Web Audio API'],
      link: '#'
    },
    {
      id: 6,
      title: '数据分析仪表板',
      description: '企业级数据分析仪表板，提供数据可视化和报表功能。',
      image: '📊',
      tags: ['React', 'D3.js', 'Python'],
      link: '#'
    }
  ]

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>我的作品集</h1>
        <p>以下是我参与开发的一些项目，展示了我的技能和经验</p>
      </div>

      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-image">
              <span className="project-emoji">{project.image}</span>
            </div>
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="portfolio-actions">
                <a href={project.link} className="btn-view">查看项目</a>
                <a href={project.link} className="btn-code">查看代码</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio

