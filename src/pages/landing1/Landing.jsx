import Logo from '../../assets/landing1/Logo.png';
import ApplicantsWidget from '../../assets/landing1/Applicants Widget.png';
import Illustration from '../../assets/landing1/Illustration.png';
import MembersWidget from '../../assets/landing1/Members Widget.png';
import PabloSign from '../../assets/landing1/pablo-sign-in 1 1.png';
import ProfileWidget from '../../assets/landing1/Profile Widget.png';
import ProposalWidget from '../../assets/landing1/Proposal Widget.png';
import Task from '../../assets/landing1/Task.png';

const Landing = () => {
    return (
        <div className='bg-zinc-200 w-full relative -z-20'>
            <header className='w-full flex justify-between p-4 sm:p-10 items-center h-16'>
                <div className='hidden lg:flex'>
                    <img src={Logo} alt='logo' className='w-16 h-10' />
                    <h1 className='text-3xl font-medium'>Open Enterprise</h1>
                </div>
                <nav className='hidden sm:block'>
                    <ul className='flex gap-5 items-center list-none'>
                        <li>
                            <a href='#' className='text-stone-800'>
                                Why Open Enterprise
                            </a>
                        </li>
                        <li>
                            <a href='#' className='text-stone-800'>
                                Features
                            </a>
                        </li>
                        <li>
                            <a href='#' className='text-stone-800'>
                                Contribute
                            </a>
                        </li>
                        <li>
                            <a href='#' className='text-green-500'>
                                Request Early Access
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='w-full'>
                <section className='w-full flex justify-between items-center gap-5 pr-0 pt-10 pb-24 pl-10'>
                    <div className='w-1/2'>
                        <h2 className='text-6xl'>
                            A new model for open collaboration
                        </h2>
                        <p className='py-7'>
                            Run an organization where members get rewarded for
                            their contributions with fractional ownership.
                        </p>
                        <button className='h-11 px-2.5 py-3.5 bg-green-500 rounded-lg text-zinc-200 font-bold text-sm'>
                            Request early Access
                        </button>
                    </div>
                    <div className='relative'>
                        <img
                            src={Illustration}
                            alt='Illustration'
                            className='w-full'
                        />
                        <svg
                            className='absolute top-0 left-0 w-full h-full -z-10'
                            xmlns='http://www.w3.org/2000/svg'
                            width='671'
                            height='720'
                            viewBox='0 0 671 720'
                            fill='none'
                        >
                            <path
                                d='M621.53 86.76C684.673 163.98 680.175 297.18 652.832 428.22C625.308 559.26 575.118 688.32 492.367 714.42C409.796 740.52 294.665 663.84 200.941 597.6C107.037 531.54 34.5401 475.92 9.71486 399.96C-15.1103 324.18 7.91594 227.88 63.8626 152.46C119.629 77.04 208.137 22.32 317.871 5.39998C427.606 -11.34 558.388 9.71997 621.53 86.76Z'
                                fill='#F3F0EA'
                            />
                        </svg>
                    </div>
                </section>

                <section className='w-full py-14 px-10 flex justify-center items-center flex-col'>
                    <h2 className='text-5xl'>
                        Reimagining what it means to work
                    </h2>
                    <p className='py-3.5 px-24 w-4/5 text-center'>
                        Teams and communities using Open Enterprise
                        fundamentally unlock a reality of work that reimagines
                        how people engage in economic opportunity, meeting the
                        demands and expectations of a modern organizaion
                    </p>
                    <div className='w-full flex justify-between py-24 px-0'>
                        <div className='w-1/4 bg-white box shadow rounded-lg py-7 px-5 flex justify-center items-center flex-col gap-7 text-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='104'
                                height='88'
                                viewBox='0 0 104 88'
                                fill='none'
                            >
                                <mask
                                    id='mask0_28_42'
                                    style={{ maskType: 'alpha' }}
                                    maskUnits='userSpaceOnUse'
                                    x='8'
                                    y='0'
                                    width='88'
                                    height='88'
                                >
                                    <circle
                                        cx='52'
                                        cy='44'
                                        r='44'
                                        fill='#F3F0EA'
                                    />
                                </mask>
                                <g mask='url(#mask0_28_42)'>
                                    <circle
                                        cx='52'
                                        cy='44'
                                        r='44'
                                        fill='#F3F0EA'
                                    />
                                    <circle
                                        opacity='0.8'
                                        cx='32'
                                        cy='43'
                                        r='32'
                                        fill='#303031'
                                    />
                                    <circle
                                        opacity='0.8'
                                        cx='72'
                                        cy='43'
                                        r='32'
                                        fill='#71A894'
                                    />
                                </g>
                            </svg>
                            <h3 className=''>Modern Workforce</h3>
                            <p className=''>
                                Multistakhoder governance aligns employees with
                                the organisation&apos;s wider community
                            </p>
                        </div>
                        <div className='w-1/4 bg-white box shadow rounded-lg py-7 px-5 flex justify-center items-center flex-col gap-7 text-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='104'
                                height='88'
                                viewBox='0 0 104 88'
                                fill='none'
                            >
                                <mask
                                    id='mask0_28_46'
                                    style={{ maskType: 'alpha' }}
                                    maskUnits='userSpaceOnUse'
                                    x='8'
                                    y='0'
                                    width='88'
                                    height='88'
                                >
                                    <circle
                                        cx='52'
                                        cy='44'
                                        r='44'
                                        fill='#F3F0EA'
                                    />
                                </mask>
                                <g mask='url(#mask0_28_46)'>
                                    <circle
                                        cx='52'
                                        cy='44'
                                        r='44'
                                        fill='#F3F0EA'
                                    />
                                    <path
                                        opacity='0.8'
                                        d='M52 20L79.7128 68H24.2872L52 20Z'
                                        fill='#303031'
                                    />
                                    <path
                                        d='M52 68L24.2872 20L79.7128 20L52 68Z'
                                        fill='#F3F0EA'
                                    />
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M38.1437 44L52.0001 68L65.8565 44L52.0001 20L38.1437 44Z'
                                        fill='#71A894'
                                    />
                                </g>
                            </svg>
                            <h3>Meritocratic by Design</h3>
                            <p>
                                Tokenisedownership aligns deeply committed
                                individual with the organisation&apos;s sucess
                            </p>
                        </div>
                        <div className='w-1/4 bg-white box shadow rounded-lg py-7 px-5 flex justify-center items-center flex-col gap-7 text-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='104'
                                height='88'
                                viewBox='0 0 104 88'
                                fill='none'
                            >
                                <mask
                                    id='mask0_28_53'
                                    style={{ maskType: 'alpha' }}
                                    maskUnits='userSpaceOnUse'
                                    x='8'
                                    y='0'
                                    width='88'
                                    height='88'
                                >
                                    <circle
                                        cx='52'
                                        cy='44'
                                        r='44'
                                        fill='#F3F0EA'
                                    />
                                </mask>
                                <g mask='url(#mask0_28_53)'>
                                    <circle
                                        cx='52'
                                        cy='44'
                                        r='44'
                                        fill='#F3F0EA'
                                    />
                                    <circle
                                        cx='52'
                                        cy='44'
                                        r='28'
                                        fill='#71A894'
                                    />
                                    <circle
                                        opacity='0.8'
                                        cx='52'
                                        cy='44'
                                        r='16'
                                        fill='#303031'
                                    />
                                    <path
                                        d='M52 36L53.7961 41.5279H59.6085L54.9062 44.9443L56.7023 50.4721L52 47.0557L47.2977 50.4721L49.0938 44.9443L44.3915 41.5279H50.2039L52 36Z'
                                        fill='#F3F0EA'
                                    />
                                </g>
                            </svg>
                            <h3>Engineered for resillience</h3>
                            <p>
                                Open enterprise surpports best practices in
                                sociocratic management
                            </p>
                        </div>
                    </div>
                    <div className='long-cards'>
                        <div className='w-full flex justify-between items-center my-36'>
                            <div className='w-1/2 leading-3'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='80'
                                    height='80'
                                    viewBox='0 0 80 80'
                                    fill='none'
                                >
                                    <g clipPath='url(#clip0_39_6)'>
                                        <rect
                                            width='80'
                                            height='80'
                                            rx='40'
                                            fill='#F3F0EA'
                                        />
                                        <circle
                                            cx='60'
                                            cy='40'
                                            r='28'
                                            fill='#66645E'
                                        />
                                        <circle
                                            cx='60'
                                            cy='40'
                                            r='12'
                                            fill='#807E76'
                                        />
                                        <path
                                            d='M53 40L-1 71.1769L-1 8.82308L53 40Z'
                                            fill='#71A894'
                                        />
                                        <path
                                            d='M62 40L26 60.7846L26 19.2154L62 40Z'
                                            fill='#81BFA8'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_39_6'>
                                            <rect
                                                width='80'
                                                height='80'
                                                rx='40'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className='text-5xl py-5'>
                                    Kickstart an organization with your
                                    co-founders
                                </h3>
                                <p>
                                    It’s the early days, you just had a long
                                    conversation with two friends about a
                                    meaningful challenge that you’re all
                                    passionate about and have a potential
                                    solution for. You’re ready to embark the
                                    startup journey.
                                </p>
                            </div>
                            <div className='image'>
                                <img
                                    src={MembersWidget}
                                    alt='members widget'
                                    className='w-4/5'
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center my-36'>
                            <div className='image'>
                                <img
                                    src={ProposalWidget}
                                    alt='proposal widget'
                                    className='w-4/5'
                                />
                            </div>
                            <div className='w-1/2 leading-3'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='80'
                                    height='80'
                                    viewBox='0 0 80 80'
                                    fill='none'
                                >
                                    <rect
                                        width='80'
                                        height='80'
                                        rx='40'
                                        fill='#F3F0EA'
                                    />
                                    <circle
                                        opacity='0.2'
                                        cx='40'
                                        cy='40'
                                        r='32'
                                        fill='#71A894'
                                    />
                                    <circle
                                        opacity='0.4'
                                        cx='40'
                                        cy='40'
                                        r='24'
                                        fill='#71A894'
                                    />
                                    <circle
                                        opacity='0.6'
                                        cx='40'
                                        cy='40'
                                        r='17'
                                        fill='#71A894'
                                    />
                                    <circle
                                        cx='40'
                                        cy='40'
                                        r='9'
                                        fill='#71A894'
                                    />
                                </svg>
                                <h3 className='text-5xl py-5'>
                                    Onboard users, investors and advisors as you
                                    grow
                                </h3>
                                <p>
                                    You’ve bootstrapped and delivered an MVP,
                                    and some investors and advisors are
                                    interested in having a chat with you. As an
                                    Open Enterprise, you can onboard them
                                    seamlessly into your digital organization
                                    and align them with your success.
                                </p>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center my-36'>
                            <div className='w-1/2 leading-3'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='80'
                                    height='80'
                                    viewBox='0 0 80 80'
                                    fill='none'
                                >
                                    <g clipPath='url(#clip0_39_6)'>
                                        <rect
                                            width='80'
                                            height='80'
                                            rx='40'
                                            fill='#F3F0EA'
                                        />
                                        <circle
                                            cx='60'
                                            cy='40'
                                            r='28'
                                            fill='#66645E'
                                        />
                                        <circle
                                            cx='60'
                                            cy='40'
                                            r='12'
                                            fill='#807E76'
                                        />
                                        <path
                                            d='M53 40L-1 71.1769L-1 8.82308L53 40Z'
                                            fill='#71A894'
                                        />
                                        <path
                                            d='M62 40L26 60.7846L26 19.2154L62 40Z'
                                            fill='#81BFA8'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_39_6'>
                                            <rect
                                                width='80'
                                                height='80'
                                                rx='40'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className='text-5xl py-5'>
                                    Engage highly committed contributors
                                </h3>
                                <p>
                                    You need talented people on-demand across
                                    various tasks that your full-time workforce
                                    can’t prioritize at the moment. As an Open
                                    Enterprise, you can easily fund tasks and
                                    have people apply to work on them in return
                                    for funds or shares.
                                </p>
                            </div>
                            <div className='flex flex-wrap w-2/5 gap-5'>
                                <img src={Task} alt='task' className='w-4/5' />
                                <img
                                    src={ApplicantsWidget}
                                    alt='applicants widget'
                                    className='w-3/5'
                                />
                                <img
                                    src={ProfileWidget}
                                    alt='profile widget'
                                    className='w-1/3 mt-12'
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-full py-14 px-10 flex justify-center items-center flex-col'>
                    <h2 className='text-5xl'>
                        Help us improve Open Enterprise
                    </h2>
                    <p className='py-3 px-24 w-4/5'>
                        As an Open Enterprise ourselves, we are actively looking
                        for new talent to join our mission of improving and
                        delivering the Open Enterprise model to the world. Apply
                        for open tasks and earn a stake in our success.
                    </p>
                    <div className='w-full flex justify-between py-24'>
                        <div className='w-1/4 bg-white shadow rounded-lg pt-7 pb-2.5 px-2.5 flex flex-col gap-7 text-left'>
                            <h4 className='text-left'>
                                Ideate a list of features based on the
                                Sociocracy model
                            </h4>
                            <p>
                                We’re looking for someone interested in business
                                theory and research that’ll help us bridge the
                                gap between our s...
                            </p>
                            <div className='flex w-full justify-between leading-5'>
                                <p className='p-1 bg-green-800 text-white rounded-lg'>
                                    Aut
                                </p>
                                <p>Apply by May 15</p>
                            </div>
                        </div>
                        <div className='w-1/4 bg-white shadow rounded-lg pt-7 pb-2.5 px-2.5 flex flex-col gap-7 text-left'>
                            <h4 className='text-left'>
                                Update a documentary with FAQs
                            </h4>
                            <p>
                                Review our community chat for the most
                                frequently asked questions and document answers
                                for our product docs.
                            </p>
                            <div className='flex w-full justify-between leading-5'>
                                <p className='p-1 bg-green-800 text-white rounded-lg'>
                                    Aut
                                </p>
                                <p>Apply by May 15</p>
                            </div>
                        </div>
                        <div className='w-1/4 bg-white shadow rounded-lg pt-7 pb-2.5 px-2.5 flex flex-col gap-7 text-left'>
                            <h4 className='text-left'>Tutorial video series</h4>
                            <p>
                                Create a series of video tutorials that cover
                                everything from start to finish on using Open
                                Enterprise.
                            </p>
                            <div className='flex w-full justify-between leading-5'>
                                <p className='p-1 bg-green-800 text-white rounded-lg'>
                                    Aut
                                </p>
                                <p>Apply by May 15</p>
                            </div>
                        </div>
                    </div>

                    <button className='h-11 py-2.5 px-3.5 bg-blue-950 rounded-lg text-zinc-200 font-bold text-xl'>
                        View more
                    </button>
                </section>
            </main>

            <footer className='mt-24'>
                <section className='w-full flex justify-between items-center gap-5 pt-10 pb-24 pl-10'>
                    <div className='w-1/2'>
                        <h2 className='text-5xl'>Start an Open Enterprise</h2>
                        <p className='py-7'>
                            If you can’t wait to run a new or existing
                            organization on Open Enterprise and are willing to
                            explore and navigate the beta, we’d love to get you
                            started.
                        </p>
                        <button className='h-11 px-2.5 py-3.5 bg-green-800 rounded-lg text-zinc-200 font-bold text-sm'>
                            Request early Access
                        </button>
                    </div>
                    <div className='relative'>
                        <img src={PabloSign} alt='pablo sign' />
                    </div>
                </section>
                <div className='flex p-10'>
                    <div className='hidden lg:flex w-full justify-between'>
                        <h1 className='text-4xl font-medium'>
                            Open Enterprise
                        </h1>
                        <nav className='nav hidden sm:block'>
                            <ul className='flex gap-5 items-center'>
                                <li className='list-items'>
                                    <a href='#' className='text-black'>
                                        Documentation
                                    </a>
                                </li>
                                <li className='list-items'>
                                    <a href='#' className='text-black'>
                                        Github
                                    </a>
                                </li>
                                <li className='list-items'>
                                    <a href='#' className='text-black'>
                                        twitter
                                    </a>
                                </li>
                                <li className='list-items'>
                                    <a href='#' className='text-green-800'>
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
