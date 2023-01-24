import eventList from "../data/events.json"
import Title from "./Title"
import { FaTwitter, FaDiscord } from "react-icons/fa"

const events = eventList.events
const styles = "transition-all ease-in cursor-pointer"

const GetActivities = () => (
  <div className="flex flex-col items-center">
    <Title heading="Activities" />
    <section className="flex justify-center sm:w-[500px] xl:w-auto  p-4 sm:p-10">
      {events.map((event, idx) => {
        return (
          event.isActive && (
            <div key={idx} className='hov-bg-theme m-5  h-auto rounded-xl bg-[#f1f5f9] p-5 text-black shadow-md relative transition-all ease-out xl:w-[380px]'>
              <div>
                <h2 className="title mt-5 text-2xl">{event.name}</h2>
                <div className="flex justify-between flex-col sm:flex-row items-start sm:items-center w-full">
                  <p className="text-md text-right text-[14px] text-gray-600">By {event.organizer}</p>
                  <h6 className="text-sm">{event.date}</h6>
                </div>
                <img src={event?.image} alt={event.name} className='w-full mb-4 rounded-md object-contain my-4' />

                <div className="flex justify-between text-2xl  bottom-1 w-[100%]">
                  <a href={event.link} target='_blank' className="bg-theme my-4 rounded-md flex h-14 w-full items-center justify-center bg-[#70b7e6] text-4xl text-white" rel="noreferrer">
                    {event.venue === "Twitter"
                      ? (
                        <FaTwitter className={styles} />
                        )
                      : (
                        <FaDiscord className={styles} />
                        )}
                  </a>
                </div>
              </div>
            </div>
          )
        )
      })}
    </section>
  </div>
)

export default GetActivities