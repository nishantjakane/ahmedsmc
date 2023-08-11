import Header from "./Header";
import Footer from "./Footer";
function ContactMe(){
    return(
        <div>
            <Header/>
            <section class="bgColor dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white montFont">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl montFont">Got any queries? Want to send feedback about a feature? Need details about our Business plan? Let us know.</p>
      <form   action="https://formspree.io/f/xnqkpvro" method="POST" class="space-y-8 ">
          <div className="">
              <label htmlFor="email" for="email" class="block mb-2 text-sm font-medium text-white dark:text-gray-300 montFont">Your email</label>
              <input id="email" type="email" name="email" class="montFont secondaryColor shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required></input>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-white dark:text-gray-300 montFont">Subject</label>
              <input type="text" id="subject" class="montFont secondaryColor block p-3 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-gray-400 montFont" >Your message</label>
              <textarea name="message" id="message" rows="6" class="montFont secondaryColor block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg accentColor sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 montFont">Send message</button>
      </form>
  </div>
</section>
            <Footer/>
        </div>
    )
}

export default ContactMe;