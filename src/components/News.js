import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Maegan Vazquez, CNN",
            "title": "Biden apologizes to world leaders for Trump's exit from Paris accords - CNN",
            "description": "President Joe Biden apologized to other world leaders on Monday for the Trump administration's decision to exit the Paris climate agreement, saying during the United Nations' climate summit that the US' exit put the country behind in its climate goals.",
            "url": "https://www.cnn.com/2021/11/01/politics/us-president-cop26-climate-opening-remarks/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211101112119-112-biden-cop26-110121-super-tease.jpg",
            "publishedAt": "2021-11-01T16:39:55Z",
            "content": "(CNN)President Joe Biden apologized to other world leaders on Monday for the Trump administration's decision to exit the Paris climate agreement, saying during the United Nations' climate summit that… [+4341 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Joan E Greve, Victoria Bekiempis, Adam Gabbatt, Jessica Glenza",
            "title": "House Democrats hope to vote this week on infrastructure and reconciliation bills – live - The Guardian",
            "description": "Timeline altered as lawmakers race to craft a prescription drug price proposal, as it looks likely the two proposals will pass the House",
            "url": "https://www.theguardian.com/us-news/live/2021/nov/01/house-democrats-vote-infrastructure-reconciliation-bills-biden-us-politics-live",
            "urlToImage": "https://i.guim.co.uk/img/media/5f6e2b96a53333bad9c4724e22391106ac9adb3e/0_97_3600_2161/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=1aa3d64f019f5133797fb39c2f6ecdaa",
            "publishedAt": "2021-11-01T16:06:11Z",
            "content": "In briefs, Texas argued the supreme court should not review the case, and the state wrote the law specifically to frustrate opponents. SB8 deputizes private citizens to enforce its provisions in civi… [+821 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Corey Gaskin",
            "title": "Our 22 favorite desk accessories for a more organized and comfy workplace - Ars Technica",
            "description": "We tested foot rests, chargers, and other desk gear to make your workday easier.",
            "url": "https://arstechnica.com/gadgets/2021/11/best-home-office-accessories-for-desk/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2020/09/Ars-WFH-Office-Setup-Vari-Standing-Desk-4-760x380.jpg",
            "publishedAt": "2021-11-01T15:45:26Z",
            "content": "Enlarge/ Your home office can always use some sprucing up, especially when it's your main place of work.\r\n31 with 27 posters participating\r\nRecently, I've gotten really into ergonomics. Since the pan… [+7180 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Joseph Choi",
            "title": "2,000 firefighters take medical leave as vaccine mandate takes effect in New York City | TheHill - The Hill",
            "description": "More than 2,000 New York City firefighters took medical leave this past week as the deadline...",
            "url": "https://thehill.com/homenews/state-watch/579401-2000-firefighters-take-medical-leave-as-vaccine-mandate-takes-effect-in",
            "urlToImage": "https://thehill.com/sites/default/files/fdny_082719getty.jpg",
            "publishedAt": "2021-11-01T15:36:09Z",
            "content": "More than 2,000 New York City firefighters took medical leave this past week as the deadline for showing proof of full vaccination has passed and city workers who failed to comply with the mandate no… [+2225 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Paul Steinhauser",
            "title": "McAuliffe, Democrats, trying to ignite Black turnout in deadlocked Virginia governor's race - Fox News",
            "description": "With major concerns about a lackluster Black voter turnout, McAuliffe brings in high profile surrogates onto the Virginia gubernatorial campaign trail",
            "url": "https://www.foxnews.com/politics/mcauliffe-democrats-trying-to-ignite-black-turnout-in-deadlocked-virginia-governors-race",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/GettyImages-1348284212.jpg",
            "publishedAt": "2021-11-01T15:21:15Z",
            "content": "Amid a deadlocked gubernatorial race in Virginia, a crucial statewide contest with plenty of national implications, longtime Democratic Rep. James Clyburn of South Carolina had a message for supporte… [+6779 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Josh Gerstein, Alice Miranda Ollstein",
            "title": "Justices wrestle with Texas abortion ban - POLITICO",
            "description": "Several justices from across the ideological spectrum took issue with the clinics’ attempt to sue Texas state court judges and clerks to stop them from hearing cases brought against abortion providers.",
            "url": "https://www.politico.com/news/2021/11/01/justices-texas-abortion-ban-518230",
            "urlToImage": "https://static.politico.com/f1/2a/bbad94db408eaf62000aa983c24a/211101-abortion-protest-getty-773.jpg",
            "publishedAt": "2021-11-01T15:04:57Z",
            "content": "Kavanaugh theorized that a left-leaning state could offer a $1 million bounty against those who sell an assault rifle, like an AR-15, then claim it wasnt using state power because only private partie… [+7929 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Lucas Manfredi",
            "title": "Coca-Cola buys remaining BodyArmor stake for $5.6 billion - Fox Business",
            "description": "BodyArmor, which is currently the second largest player in the sports drink category behind PepsiCo's Gatorade, has generated more than $1.4 billion in retail sales, up about 50% this year.",
            "url": "https://www.foxbusiness.com/markets/coca-cola-bodyarmor-purchase",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/0/0/CocaColaBodyArmor1.jpg?ve=1&tl=1",
            "publishedAt": "2021-11-01T14:53:52Z",
            "content": "Coca-Cola has acquired full control of BodyArmor, a line of sports performance and hydration beverages, for $5.6 billion in cash.\r\n<table><tr><th>Ticker</th><th>Security</th><th>Last</th><th>Change</… [+2525 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Leslie Josephs",
            "title": "American Airlines reduces flight cancellations but staffing challenges continue to disrupt travel - CNBC",
            "description": "American cancelled hundreds of additional flights on Monday after more than 1,500 over the weekend.",
            "url": "https://www.cnbc.com/2021/11/01/american-airlines-flight-cancellations-and-staffing-challenges-continue.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106907550-1625664715033-gettyimages-1323904602-b64i0775_20210616123745925.jpg?v=1633512760",
            "publishedAt": "2021-11-01T14:43:08Z",
            "content": "American Airlines on Monday canceled more than 300 flights, or 10% of its schedule, as the company scrambled to stabilize its operations after reporting staffing shortages that led to travel disrupti… [+1250 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Max Zahn",
            "title": "Ex-Barclays CEO Jes Staley is one of many business figures with ties to Jeffrey Epstein - Yahoo Finance",
            "description": "Barclays CEO Jes Staley is leaving the bank after an investigation by British authorities into his relationship with Jeffrey Epstein. But Staley is hardly...",
            "url": "https://finance.yahoo.com/news/barclays-ceo-jes-staley-is-one-of-many-business-figures-with-ties-to-jeffrey-epstein-144027349.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/a31v83mjfD5l1zkLxrHQyA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03ODA-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/0b68d4c0-3b1e-11ec-bfa5-96f995f9a71b",
            "publishedAt": "2021-11-01T14:40:27Z",
            "content": "Barclays (BCS) CEO Jes Staley is leaving the bank after an investigation by British authorities into his relationship with now-deceased sex offender Jeffrey Epstein, the bank announced on Monday. \r\nT… [+6508 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "https://www.engadget.com/about/editors/kris-holt",
            "title": "Amazon begins early Black Friday sales on its own devices | Engadget - Engadget",
            "description": "Some Fire tablets are half price, while the Kindle is down from $90 to $50..",
            "url": "https://www.engadget.com/amazon-black-friday-sales-kindle-fire-tablet-fire-tv-stick-4k-141930083.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-11/27f7e2d0-3b1d-11ec-b7fa-54c05786133e",
            "publishedAt": "2021-11-01T14:21:22Z",
            "content": "Even though Black Friday is over three weeks away, some major retailers are getting in on the action early\r\n. Among them is Amazon, which has slashed prices on its own devices. One of the products yo… [+1368 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "R.J. Anderson",
            "title": "World Series score: Astros rally vs. Braves in Game 5, stay alive after allowing first-inning grand slam - CBSSports.com",
            "description": "The Braves were denied the chance to win their first title in 26 years in front of their home fans",
            "url": "https://www.cbssports.com/mlb/news/world-series-score-astros-rally-vs-braves-in-game-5-stay-alive-after-allowing-first-inning-grand-slam/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/11/01/df5f3163-78f1-4f56-818c-0b021e957667/thumbnail/1200x675/e2bc13f3aeed920253a48b407d403b93/astros-11.png",
            "publishedAt": "2021-11-01T14:11:00Z",
            "content": "The Houston Astros fended off elimination on Sunday night and denied the Atlanta Braves the chance to win the 2021 World Series at their home ballpark. The Astros defeated the Atlanta Braves in Game … [+5248 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Chris Welch",
            "title": "Beats announces Fit Pro earbuds with wing tip design and $200 price - The Verge",
            "description": "Beats has announced its latest wireless earbuds, the $199.99 Beats Fit Pro. The Fit Pros have active noise cancellation, IPX4 water resistance, and feature a wing tip design meant to help keep them anchored in your ears during even the most extreme workouts.",
            "url": "https://www.theverge.com/2021/11/1/22753187/beats-fit-pro-announced-features-price",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/ZoIbV-GmHU4OjsDlrXxob9qcPCE=/0x141:1419x884/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22967649/_BeatsFitPro_4FAM_Lifestyle_0036_WEB_v4.png",
            "publishedAt": "2021-11-01T14:00:00Z",
            "content": "A middle offering between the Studio Buds and Powerbeats Pro\r\nImage: Beats\r\nBeats today announced its latest wireless earbuds, the $199.99 Beats Fit Pro. The new product slots into the Apple-owned br… [+1839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "The Book of Boba Fett's First Trailer Takes Us Back Into the Star Wars Underworld - Gizmodo",
            "description": "The Fett Family's back in business—in the Star Wars universe and on Disney+—which means Boba's got plenty of friends and foes to deal with.",
            "url": "https://gizmodo.com/the-book-of-boba-fetts-first-trailer-takes-us-back-into-1847971910",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a152d8493b51f366ca56e6ae6de03ace.png",
            "publishedAt": "2021-11-01T14:00:00Z",
            "content": "Boba Fett is back, and he and his latest bounty hunting partner mean business in Star Wars twisty underworld of smugglers and scum. Lucasfilm has released the first teaser trailer for The Book of Bob… [+1767 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Deepa Shivaram",
            "title": "A Southwest pilot is under investigation for the divisive phrase 'Let's go, Brandon' - NPR",
            "description": "The airline said it will address the situation with the pilot and that it doesn't condone employees sharing personal political opinions while working or tolerate behavior that leads to divisiveness.",
            "url": "https://www.npr.org/2021/11/01/1051074812/lets-go-brandon-southwest-pilot",
            "urlToImage": "https://media.npr.org/assets/img/2021/11/01/ap21286676482426_wide-6aec3a8092348084dc25bbea4c38526c5ea5600f.jpg?s=1400",
            "publishedAt": "2021-11-01T13:47:49Z",
            "content": "Southwest Airlines is conducting an internal investigation into an incident where a pilot signed off with the phrase, \"Let's go, Brandon,\" which conservatives are using to insult President Biden.\r\nMo… [+1268 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Aylin Woodward, Hilary Brueck",
            "title": "Delta-specific booster isn't necessary, what we have is good enough - Business Insider",
            "description": "While the Delta variant is dominant worldwide, existing vaccines work well against it. So there's no need for a variant-specific booster, experts say.",
            "url": "https://www.businessinsider.com/delta-booster-unlikely-data-experts-suggest-unnecessary-2021-10",
            "urlToImage": "https://i.insider.com/617c011f23745d0018242b9e?width=1200&format=jpeg",
            "publishedAt": "2021-11-01T13:46:14Z",
            "content": "When the Delta variant ruined America's plans for a hot vax summer, drug-makers scrambled for a quick fix. \r\nBoosters were coming, politicians promised. The mRNA technology undergirding Moderna and P… [+6986 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Suzy Byrne",
            "title": "Alec and Hilaria Baldwin 'rallied' to give kids a fun Halloween amid 'Rust' shooting investigation - Yahoo Entertainment",
            "description": "\"Parenting through this has been an intense experience, to say the least,\" Hilaria wrote along with a series of family Halloween photos. \"Today, we rallied...",
            "url": "https://www.yahoo.com/entertainment/alec-balwin-hilaria-baldwin-rallied-kids-halloween-rust-shooting-investigation-134539925.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/dCWEcNG8h8fWxWklYWhbWw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MTU-/https://s.yimg.com/os/creatr-uploaded-images/2021-11/b1007800-3b16-11ec-b47f-2daca137a6aa",
            "publishedAt": "2021-11-01T13:45:39Z",
            "content": "Alec Baldwin and his wife, Hilaria \"rallied\" in the wake of the fatal shooting on the set of Rust to give their kids a good time on Halloween.\r\n\"Parenting through this has been an intense experience,… [+3848 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Using Microbes To Make Martian Rocket BioFuel on Mars - SciTechDaily",
            "description": "A new study outlines a biotechnology process to produce rocket fuel on red planet. Researchers at the Georgia Institute of Technology have developed a concept that would make Martian rocket fuel, on Mars, that could be used to launch future astronauts back to…",
            "url": "https://scitechdaily.com/using-microbes-to-make-martian-rocket-biofuel-on-mars/",
            "urlToImage": "https://scitechdaily.com/images/Mars-Exploration-Base.jpg",
            "publishedAt": "2021-11-01T13:43:52Z",
            "content": "ByGeorgia Institute of TechnologyNovember 1, 2021\r\nA new study outlines a biotechnology process to produce rocket fuel on red planet.\r\nResearchers at the Georgia Institute of Technology have develope… [+7511 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Wyatte Grantham-Philips, USA TODAY",
            "title": "Why is your dog tilting its head? New study dives into the adorable habit - USA TODAY",
            "description": "Researchers from Eotvos Lorand University suggested that head tilting in dogs may be related to \"processing relevant, meaningful stimuli.\"",
            "url": "https://www.usatoday.com/story/news/world/2021/11/01/dog-head-tilt-study/6230719001/",
            "urlToImage": "https://www.gannett-cdn.com/-mm-/84782def0a8168006e51cc1bbaed01bd1f204c58/c=0-38-724-445/local/-/media/2020/07/08/USATODAY/usatsports/MotleyFool-TMOT-a98d5c0a-081-dog-head-tilted.jpg?auto=webp&format=pjpg&width=1200",
            "publishedAt": "2021-11-01T13:33:10Z",
            "content": "Man's best friend has a lot of adorable habits, but the pose we arguably all know and love is – the dog head-tilt.\r\nBut why do our furry friends tilt their heads in the first place? In a study publis… [+2161 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "The Wall Street Journal",
            "title": "Minneapolis candidates face off in upcoming election, the first since the killing of George Floyd - Fox Business",
            "description": "Andrea Erickson said she is torn over the role police should play in this city ahead of the first municipal election since the murder by a Minneapolis police officer of George Floyd.",
            "url": "https://www.foxbusiness.com/politics/minneapolis-candidates-face-off-upcoming-election-first-since-killing-of-george-floyd",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/11/0/0/jacobfreyspeakingtoconstituents.jpg?ve=1&tl=1",
            "publishedAt": "2021-11-01T13:29:28Z",
            "content": "Andrea Erickson said she is torn over the role police should play in this city ahead of the first municipal election\r\n since the murder by a Minneapolis police officer of George Floyd\r\n. \r\nThe North … [+7360 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Lee Brown",
            "title": "'Joker' maniac in Tokyo train attack was suicidal after he 'messed up at work' - New York Post ",
            "description": "Kyota Hattori said he “wanted to die” after a work-realted incident and that he thought that if he were to kill a few people it would earn him the death penalty.",
            "url": "https://nypost.com/2021/11/01/tokyo-train-attacker-says-he-was-suicidal-after-work-related-problem/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/11/newspress-collage-19988076-1635772514036.png?w=1024",
            "publishedAt": "2021-11-01T13:27:00Z",
            "content": "The knife-wielding maniac dressed as the Joker who went on a rampage on a Japanese train Sunday told police he hoped to get the death penalty because he’d “messed up at work,” according to a report.\r… [+2696 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=edbffe49f92e4dfaabd4f8f603f3940b"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top headlines </h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return  <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title?element.title.slice(0,45) + '...':'Title Not Present'} description={element.description?element.description.slice(0,80) + '...':'Description Not Present'} imageUrl={element.urlToImage?element.urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/211101113235-spacex-nasa-crew-2-dragon-capsule-endeavour-0424-super-tease.jpg'} newsUrl={element.url} />
                                </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
