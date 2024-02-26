

const ContactUs = () => {
    return (
        <div>
            <div className="text-3xl font-bold text-center mt-9 font-serif">
                <h2 >Talk to Us</h2>
            </div>
            <div className="relative mx-10 md:mx-32 my-10">
                <img
                    src="/images/nature.avif"
                    alt="Image"
                    className="w-full h-96 rounded-xl"
                />

                <textarea
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-md w-2/3 h-32 bg-gray-200"

                    placeholder="Enter your Message"
                />

                <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md mt-10">
                    Send
                </button>
            </div>
        </div>
    );
}


export default ContactUs;