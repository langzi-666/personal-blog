import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言！我会尽快回复您。')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>联系我</h1>
          <p>有任何问题或合作意向？欢迎与我联系！</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>联系方式</h2>
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h3>邮箱</h3>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-content">
                  <h3>电话</h3>
                  <p>+86 138-0000-0000</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>地址</h3>
                  <p>中国，某某城市</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>社交媒体</h3>
              <div className="social-icons">
                <a href="#" className="social-icon" title="GitHub">
                  <span>🐙</span>
                </a>
                <a href="#" className="social-icon" title="LinkedIn">
                  <span>💼</span>
                </a>
                <a href="#" className="social-icon" title="Twitter">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-icon" title="WeChat">
                  <span>💬</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>发送消息</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="请输入您的姓名"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="请输入您的邮箱"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">消息</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="请输入您的消息..."
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

