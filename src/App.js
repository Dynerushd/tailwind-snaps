function App() {
  return (
    <main className="flex flex-col items-center sm:py-20">
      <form
        action=""
        className="flex flex-col px-[40px] py-[16px] sm:pt-[32px] sm:pb-[40px] w-full sm:w-[448px] rounded-[18px] sm:border-[1px] border-[#8a919e33]"
      >
        <h1 className="font-black text-4xl mb-4 flex sm:hidden">C</h1>
        <h1 className="font-medium text-[26px] mb-[46px] hidden sm:flex">
          cryptobase
        </h1>
        <h2 className="text-[28px] mb-5 font-bold">Sign in to Cryptobase</h2>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold mb-2 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your e-mail address"
            className="px-4 py-5 sm:py-[16px] bg-transparent text-md border-2 border-[#8a919e6c] rounded-[8px] font-regular outline-none focus:outline-[#447FF6] outline-offset-0 transition-all hover:bg-[#0e0f13]"
          />
          <div className="flex flex-col space-y-4 mb-7 mt-10">
            <button className="px-4 py-4 bg-[#447FF6] rounded-[8px] font-bold text-[#0A0B0E] transition-all hover:bg-[#5785e8]">
              Continue
            </button>
            <button className="px-4 py-4 bg-transparent border-[1px] border-[#8a919e33] rounded-[8px] font-bold transition-all hover:bg-[#0e0f13]">
              Create account
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <a href="" className="text-[#477FF6] text-xs hidden sm:flex">
              Sign in to a business account
            </a>
            <a href="" className="text-[#477FF6] text-xs">
              Privacy policy
            </a>
          </div>
        </div>
      </form>

      <section className="cookie-banner bg-[#141519] py-6 px-8 absolute inset-0 top-auto">
        <div className="container mx-auto max-w-[700px] flex flex-col sm:flex-row gap-6 sm:gap-2">
          <p className="text-[14px] leading-5">
            We user our own cookies on our websites to enable basic functions
            like page navigation and access to secure areas of our website. For
            more info, see our{" "}
            <span className="text-[#477FF6]">Cookie Policy</span>
          </p>
          <button className="px-4 py-2 bg-[#477FF6] rounded-[4px] font-bold text-[#0A0B0E] transition-all hover:bg-[#5785e8]">
            Dismiss
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
