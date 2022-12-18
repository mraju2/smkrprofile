import { FunctionComponent, useState } from "react";
import { clsx } from "clsx";

export const Experience: FunctionComponent = () => {
  const [activeRole, setActiveRole] = useState<number>(1);
  const [activeJob, setActiveJob] = useState<number>(1);
  return (
    <>
      <div className="pb-[50px] pt-[50px]">
        <h1 className="top-heading-number">Where I&apos;ve Worked</h1>
      </div>
      <div>
        <section className="ml-[0px]">
          <div className="flex flex-row">
            <button
              className={clsx(
                "job__button",
                activeJob === 1 && "job__button__active"
              )}
              onClick={() => {
                setActiveJob(1);
                setActiveRole(1);
              }}
            >
              Toshiba-TSIP(03/2013-Present)
            </button>
            <button
              className={clsx(
                "job__button",
                activeJob === 2 && "job__button__active"
              )}
              onClick={() => {
                setActiveJob(2);
                setActiveRole(4);
              }}
            >
              Credit Suisse(02/2012-02/2013)
            </button>
            <button
              className={clsx(
                "job__button",
                activeJob === 3 && "job__button__active"
              )}
              onClick={() => {
                setActiveJob(3);
                setActiveRole(5);
              }}
            >
              Efkon(01/2010 to 01/2012)
            </button>
            <button
              className={clsx(
                "job__button",
                activeJob === 4 && "job__button__active"
              )}
              onClick={() => {
                setActiveJob(4);
                setActiveRole(6);
              }}
            >
              SKDE
            </button>
            <button
              className={clsx(
                "job__button",
                activeJob === 5 && "job__button__active"
              )}
              onClick={() => {
                setActiveJob(5);
                setActiveRole(7);
              }}
            >
              Job Hustling
            </button>
            <button
              className={clsx(
                "job__button",
                activeJob === 6 && "job__button__active"
              )}
              onClick={() => {
                setActiveJob(6);
                setActiveRole(8);
              }}
            >
              Education
            </button>
          </div>
        </section>
      </div>
      <div className="mt-[30px] flex justify-self-stretch">
        <section className="rectangle">
          <div className="flex flex-col">
            <button
              className={clsx(
                "position__button",
                activeRole === 1 && "position__button__active"
              )}
              onClick={() => {
                setActiveJob(1);
                setActiveRole(1);
              }}
            >
              Principal Engineer
            </button>
            <button
              className={clsx(
                "position__button",
                activeRole === 2 && "position__button__active"
              )}
              onClick={() => {
                setActiveJob(1);
                setActiveRole(2);
              }}
            >
              Module Lead
            </button>
            <button
              className={clsx(
                "position__button",
                activeRole === 3 && "position__button__active"
              )}
              onClick={() => {
                setActiveJob(1);
                setActiveRole(3);
              }}
            >
              Senior Software Engineer
            </button>
            <button
              className={clsx(
                "position__button",
                activeRole === 4 && "position__button__active"
              )}
              onClick={() => {
                setActiveJob(2);
                setActiveRole(4);
              }}
            >
              ENO
            </button>
            <button
              className={clsx(
                "position__button",
                activeRole === 5 && "position__button__active"
              )}
              onClick={() => {
                setActiveJob(3);
                setActiveRole(5);
              }}
            >
              Software Engineer
            </button>
            <button
              className={clsx(
                "position__button",
                activeRole === 6 && "position__button__active"
              )}
              onClick={() => {
                setActiveJob(4);
                setActiveRole(6);
              }}
            >
              Asistant Professor
            </button>
            <button
              className={clsx(
                "position__button",
                activeRole === 7 && "position__button__active"
              )}
              onClick={() => {
                setActiveJob(5);
                setActiveRole(7);
              }}
            >
              ItBt
            </button>
            <button
              className={clsx(
                "position__button",
                activeRole === 8 && "position__button__active"
              )}
              onClick={() => {
                setActiveJob(6);
                setActiveRole(8);
              }}
            >
              Engineer
            </button>
          </div>
        </section>
        {activeRole === 1 && (
          <div>
            <p className="job__description">
              During my work on a software project, I participated in
              requirement discussions and helped estimate the effort required
              for individual tasks. I applied a number of software development
              methodologies, including test-driven development (TDD), pair
              programming, and extreme programming, in order to ensure that the
              final product met the desired requirements and was of high
              quality.
            </p>
            <p className="job__description">
              To facilitate testing, I used the Jest and cucumber frameworks for
              both TDD and end-to-end testing. I also managed the project&apos;s
              code using Gitlab and implemented performance optimization
              techniques using the Vercel SWR caching library. These practices
              helped me deliver a reliable and efficient software solution.
            </p>
            <p className="job__description">
              Writing clean, efficient, and maintainable code using React and
              related technologies such as HTML, CSS, and JavaScript.
            </p>
            <p className="job__description">
              Participating in code reviews to ensure that the code meets the
              project&apos;s standards and best practices.
            </p>
            <p className="job__description">
              Staying up-to-date with the latest React developments and industry
              trends.
            </p>
          </div>
        )}
        {activeRole === 2 && (
          <div>
            <p className="job__description">
              Collaborating with a team to understand the requirements and
              design of a project.
            </p>
            <p className="job__description">
              Writing clean, efficient, and maintainable code using React and
              related technologies such as HTML, CSS, and JavaScript.
            </p>
            <p className="job__description">
              Implementing user interface features according to design
              specifications.
            </p>
            <p className="job__description">
              Identifying and proposing solutions to technical challenges and
              roadblocks.
            </p>
            <p className="job__description">
              Staying up-to-date with the latest React developments and industry
              trends.
            </p>
          </div>
        )}
        {activeRole === 3 && (
          <div>
            <p className="job__description">
              I have developed complete UWP apps, including both front-end and
              back-end components, as an individual contributor.
            </p>
            <p className="job__description">
              Ensured responsiveness across multiple windows devices.
            </p>
            <p className="job__description">
              As part of my responsibilities at the organization, I develop
              solutions using C# and the .NET framework, create in-house
              applications, and provide technical support to stakeholders.
            </p>
            <p className="job__description">
              Played an active role in business proposal meetings to project
              closure.
            </p>
          </div>
        )}
        {(activeRole === 4 || activeRole === 5) && (
          <div>
            <p className="job__description">
              As part of my responsibilities at the organization, I develop
              solutions using C# and the .NET framework, create in-house
              applications, and provide technical support to stakeholders.
            </p>
            <p className="job__description">
              I also take part in project meetings and report on project
              statuses and developments to senior team members.
            </p>
            <p className="job__description">
              Write C# code that is clean, efficient, scalable, and dependable
            </p>
          </div>
        )}
        {activeRole === 6 && (
          <div>
            <p className="job__description">
              After graduating, I became an assistant professor at the same
              college. I took advantage of the opportunity to spend two more
              years in college before starting this job.
            </p>
            <p className="job__description">
              The students I taught were very attached to me, and even now, my
              daughter thinks I am a good teacher.
            </p>
          </div>
        )}
        {activeRole === 7 && (
          <div>
            <p className="job__description">
              After graduation I was feeling lost and didn&apos;t know what to
              do with myself, I tried a bunch of different things to try and
              figure it out. I prepared for government jobs, took some software
              training courses, and a bunch of other stuff. I probably tried at
              least 20 different things during that time. Now that I&apos;m in a
              professional career, I haven&apos;t really done that many
              different things like that. It was a crazy time, but I&apos;m glad
              I tried all those different things - it helped me figure out what
              I really wanted to do.
            </p>
          </div>
        )}
        {activeRole === 8 && (
          <div>
            <p className="job__description">
              I graduated from this college back in 2006 and it&apos;s been a
              huge part of my life ever since. I love this place and have
              visited at least 10 times since I graduated. Those 4 years were
              some of the best of my life, and I&apos;ve even taken my kids back
              to show them around and tell them all my old stories. It&apos;s
              always such a special feeling to go back to my old college.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
