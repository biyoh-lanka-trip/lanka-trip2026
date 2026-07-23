const header = document.getElementById("header");
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.textContent = open ? "×" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll("[data-reveal]").forEach(el => revealObserver.observe(el));

    // デモ送信：実運用時はフォームサービスまたはAPIに接続してください。
    const form = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      formStatus.textContent = "デモフォームのため送信は行われません。公開時に送信先APIを設定してください。";
    });

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      const btn = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        faqItems.forEach(other => {
          other.classList.remove("open");
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });


    const earlyForm = document.getElementById("earlyAccessForm");
    const earlyStatus = document.getElementById("earlyStatus");
    const earlySection = document.getElementById("early-access");
    const stickyLead = document.getElementById("stickyLead");

    if (earlyForm) {
      earlyForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!earlyForm.checkValidity()) {
          earlyForm.reportValidity();
          return;
        }

        earlyStatus.textContent =
          "デモフォームのため登録処理は行われません。公開前にメール配信サービスまたはCRMへ接続してください。";
      });
    }

    if (earlySection && stickyLead) {
      const stickyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          stickyLead.classList.toggle("hidden", entry.isIntersecting);
        });
      }, { threshold: 0.15 });

      stickyObserver.observe(earlySection);
    }
