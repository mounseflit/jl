export default function Partners() {
  return (
    <section id="section-partners" className="partners">
      <div className="skewed"></div>
      <div className="container">
        <div className="max-w-md m-x-auto">
          <h3 className="text-center">
            Your opportunity to succeed starts here!
          </h3>
          <h5 className="text-center">
            Whether you are a professional evaluator or a business owner, we are
            here to support you every step of the way.
          </h5>
        </div>

        <div className="partners-grid">
          <div className="grid-2 gap-6 grid-1-md">
            {/* Become a JABBer */}
            <div className="partner-box fade-up">
              <div className="partner-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  <path d="M4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h4>Become a JABBer</h4>
              <div className="partner-box__desc">
                Earn money on your own schedule by completing mystery shopping
                missions. All you need is your smartphone and attention to
                detail.
              </div>
              <a href="/go" className="button">
                Start earning now
              </a>
            </div>

            {/* Become a Partner */}
            <div className="partner-box fade-up">
              <div className="partner-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349" />
                  <path d="M1.5 12l10.5-9 10.5 9" />
                </svg>
              </div>
              <h4>Become a Partner</h4>
              <div className="partner-box__desc">
                You own a restaurant, retail store, or service business? Join
                JABB and get real-time customer experience insights to grow your
                brand.
              </div>
              <a href="/partner" className="button">
                Partner with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
