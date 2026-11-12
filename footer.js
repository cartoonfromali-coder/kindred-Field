document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("site-footer");

  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">

        <div class="footer-brand">
          <a href="index.html" class="footer-logo">Kindred Field</a>
          <p>
            A calm space for thoughtful ideas, everyday inspiration,
            and simple discoveries worth exploring.
          </p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="index.html">Home</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="terms-of-service.html">Terms of Service</a>
        </nav>

      </div>

      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Kindred Field. All rights reserved.</p>
      </div>
    </footer>
  `;

  const style = document.createElement("style");

  style.textContent = `
    .site-footer {
      margin-top: 80px;
      background: #294032;
      color: #eef3ed;
    }

    .footer-inner {
      max-width: 1120px;
      margin: 0 auto;
      padding: 58px 24px 45px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 50px;
    }

    .footer-brand {
      max-width: 430px;
    }

    .footer-logo {
      color: #ffffff;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.4px;
    }

    .footer-brand p {
      margin: 15px 0 0;
      color: #cbd6cc;
      font-size: 14px;
      line-height: 1.7;
    }

    .footer-nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 12px 24px;
      padding-top: 4px;
    }

    .footer-nav a {
      color: #e2e9e2;
      font-size: 13px;
      font-weight: 700;
      transition: color 0.2s ease;
    }

    .footer-nav a:hover {
      color: #b8cdb8;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.12);
      text-align: center;
      padding: 20px 24px;
    }

    .footer-bottom p {
      margin: 0;
      color: #b9c7ba;
      font-size: 12px;
    }

    @media (max-width: 760px) {
      .footer-inner {
        padding: 45px 20px 35px;
        flex-direction: column;
        gap: 28px;
      }

      .footer-nav {
        justify-content: flex-start;
      }
    }
  `;

  document.head.appendChild(style);
});