export interface Chapter {
  title: string;
  paragraphs: string[];
  image?: string;
  imagePosition?: 'top' | 'bottom';
  inlineImages?: { src: string; beforeParagraph: number }[];
}

export const historyChapters: Chapter[] = [
  {
    "title": "The History of Sri Ranganathaswamy Temple, Srirangam",
    "paragraphs": [
      "Set on a sacred island in the Kaveri, encircled by that river and its tributary the Kollidam, Sri Ranganathaswamy Temple at Srirangam is revered as the foremost among the 108 Divya Desams — the holiest shrines of Vaishnavism — and is regarded by many as the spiritual headquarters of Sri Vaishnavism itself. It has been glorified across centuries in the hymns of the twelve Alwar poet-saints, and is known to devotees as Bhooloka Vaikuntham, Vishnu's own heaven brought down to earth. What follows is the temple's story, as it has come down through legend, inscription, and unbroken tradition."
    ],
    "image": "/srirangam/history-main.jpg",
    "imagePosition": "bottom"
  },
  {
    "title": "A Temple Rooted in Divine Legend",
    "paragraphs": [
      "Srirangam's story does not begin with a foundation stone but with a myth reaching back to the creation of the universe itself. According to the Puranas, Lord Brahma was born from a lotus that sprang from Vishnu's navel, and upon receiving a sacred mantra that granted him the power to create, he was seized with a longing to worship the very source of his own being. His penance was so intense that it pleased Vishnu, who revealed himself to Brahma as Ranganatha — reclining upon the great serpent Ananta Sesha, enshrined within a sanctified vimana — and declared that he would manifest at eight sacred sites on earth, with Srirangam destined to be the first and most ancient of them all.",
      "The deity and its vimana were carried to Satyaloka, where Brahma and his descendants continued to worship it across generations, among them Vaivasvata Manu, the progenitor of the Solar Dynasty. It was a descendant of this same line, King Ikshvaku — an ancestor of Sri Rama, said in tradition to have lived in the Thretha Yuga — who is credited with bringing the deity down to the mortal world once more.",
      "Chanting the sacred Ashtakshara Mantra countless times in devotion to Vishnu, Ikshvaku's penance won him the Lord in the form of the Sri Ranga Vimana, which he installed near his capital of Ayodhya, between the rivers Sarayu and Tamasa, in a grand ceremony held in the month of March — an event still commemorated at Srirangam every year through a special Brahmotsavam festival held in that same month.",
      "Generations of Ikshvaku's descendants worshipped the deity at Ayodhya, until Sri Rama himself, upon crowning Vibhishana as king of Lanka, chose to give him this very image of Ranganatha as a gift."
    ],
    "image": "/srirangam/history-divine-legend.jpg",
    "imagePosition": "top",
    "inlineImages": [
      {
        "src": "/srirangam/history-satyaloka.jpg",
        "beforeParagraph": 1
      },
      {
        "src": "/srirangam/history-ikshvaku.jpg",
        "beforeParagraph": 2
      },
      {
        "src": "/srirangam/history-rama.jpg",
        "beforeParagraph": 3
      },
      {
        "src": "/srirangam/history-gift.jpg",
        "beforeParagraph": 4
      }
    ]
  },
  {
    "title": "How the Deity Came to Rest on the Banks of the Cauvery",
    "paragraphs": [
      "Among the guests said to have attended Rama's coronation at Ayodhya was Dharmavarma, a Chola prince from the south, who had earlier been captivated by the beauty of the Sri Ranga Vimana and longed to bring it to his own kingdom. As Vibhishana journeyed home toward Lanka, Dharmavarma waited for him along the way. Vibhishana paused to rest on the banks of the Chandra Pushkarani tank, setting the deity down to offer worship — and Dharmavarma persuaded him to extend his stay a little longer.",
      "When Vibhishana finally tried to resume his journey, he found the image would not budge from where it had been placed. Delighted, Dharmavarma understood this as the Lord's own wish to remain on the banks of the Cauvery. Vibhishana accepted it as divine will, and in turn Ranganatha — who faces south from this spot — promised to continue watching over Vibhishana and his kingdom from afar.",
      "Dharmavarma, though absent from secular historical records and known only through the puranas, is credited with having built the first shrine around the vimana, along with the great hall in front of it, the tower shrine of Senai Mudaliar, the Periya Tirumandapam (also called Azhahiya Manavalan Thirumandapam), and the stone pavilion at the Chandra Pushkarani tank."
    ],
    "image": "/srirangam/history-vibishana.jpg",
    "imagePosition": "top",
    "inlineImages": [
      {
        "src": "/srirangam/history-dharmavarma.jpg",
        "beforeParagraph": 2
      }
    ]
  },
  {
    "title": "Buried, Forgotten, and Found Again",
    "paragraphs": [
      "In time, floodwaters from the Cauvery overran Dharmavarma's temple, burying it beneath drifts of river sand on the island formed between the Cauvery and its tributary, the Coleroon (Kollidam) — the flooding said to have been so severe that even the finial atop the temple's tower vanished from sight, and tradition holds it drove the reigning Chola king to abandon Uraiyur as his capital in favor of Thanjavur. The site was swallowed by forest and, in time, became a refuge for wild animals — its very existence forgotten.",
      "Its rediscovery is remembered through a well-loved story. A Chola king — a descendant of Dharmavarma, remembered in some tellings as Kili Cholan and in others as Kilikanda Chola or Killi Valavan — was out hunting near the Cauvery and stopped to rest beneath a tree, where a green parrot perched above him began to sing, not chirp, a Sanskrit verse describing what lay buried below. As the verse has come down through tradition, it told him that the Cauvery flowing before him was in truth the Viraja, the celestial river said to flow through Vaikuntha; that the very island he stood on was Vaikuntha come down to earth; and that the deity buried beneath his feet was Para Vasudeva, the supreme form of Vishnu himself.",
      "Startled by what he had heard, the king had his men dig at the spot, but the first search turned up nothing — the island held many such stretches of sand along the river, and it was hard to be sure they had the right ground. In some versions of the story he is said to have grown disheartened and begun laying the foundation for an entirely new temple beside the tree, only for Thiruvarangan himself to appear in his dream that very night, revealing that he lay buried in the earth exactly where the parrot had sung of him. Acting on the vision, the king cleared away the forest and sand and uncovered the temple once more, rebuilding the shrine and its sacred street, the Thiruveedi, in its original form, and improving the banks of the Cauvery nearby. He raised the Kili Mandapam, or \"Parrot Hall,\" as a lasting memorial to the bird that had led him to the Lord — a tradition kept alive even today, as a live parrot is still kept there in a cage in tribute to the legend — and came to be remembered ever after as Kili Cholan, ruling, by tradition, from the old Chola capital of Uraiyur, just across the river from Srirangam. It was from this restoration that the temple came to be widely known as Tiruvaranga Tirupathi. Even the temple's first enclosure, built earlier by Dharmavarma, is said to carry an echo of Vedic devotion in its architecture: it is ringed by twenty-four pillars, one for each syllable of the Gayatri mantra."
    ],
    "image": "/srirangam/history-parrot.jpg",
    "imagePosition": "top"
  },
  {
    "title": "The Dynasties That Built Srirangam",
    "paragraphs": [
      "What is preserved in legend is matched, from around the 3rd century onward, by a documented history. The temple and the river Cauvery both feature vividly in the Tamil classic Silappathikaram, and in the Nalayira Divya Prabandham, the four thousand hymns composed by the Alwar poet-saints between roughly the 4th and 6th centuries — verses that describe Ranganatha reclining with Lakshmi at his feet upon the serpent Adisesha. Several of the Alwars are, by local tradition, closely tied to the temple's own history, though no archaeological evidence survives to confirm the connection. Sri Vaishnavas hold to a still older belief, too — that the temple itself rose out of the primeval cosmic ocean, the Tiru-parkadal, at the very moment the universe was created. After the 7th century, the Bhakti movement took hold across Tamil Nadu, giving rise to Saivism and Sri Vaishnavism as devotional paths in their own right, and it was during this resurgence that Srirangam rose to particular prominence.",
      "From this point, the temple's growth can be traced through inscriptions and royal grants across several dynasties, though it is the Cholas above all who are remembered as the temple's principal builders and patrons, endowing it generously across many generations. Among the earliest known is a gift from the Chola king Paranthaka I, who in the 10th century donated a silver lamp stand and gold for the temple's upkeep. Raja Mahendra Chola, in the following century, built the first enclosure wall, which still carries his name.",
      "It was the great Sri Vaishnava teacher Ramanuja, in the 11th and 12th centuries, who left perhaps the deepest mark on Srirangam — not through construction, but by reorganizing the temple's worship and administration so thoroughly that many of today's rituals still trace back to his reforms. Born in 1017 at Sriperumbudur, Ramanuja spent much of his life at Srirangam, where Ranganatha himself is said to have conferred on him the title \"Udayavar,\" and where he set the temple's finances, priesthood, and daily rites in order in a way that shaped the institution for centuries afterward. He remained at Srirangam until his death in 1137, passing away, by tradition, with his head resting in the lap of his disciple Embar and his feet in the lap of Vaduga Nambi, listening to the recitation of the Divya Prabandham."
    ]
  },
  {
    "title": "The Preserved Body of Ramanuja",
    "paragraphs": [
      "What makes Ramanuja's presence at Srirangam so extraordinary is that it did not end with his death. His shrine, the Ramanuja Sannidhi, stands in the temple's fifth enclosure, in its southwest corner, and inside it, seated in a posture of quiet meditation, is what devotees revere as his own physical body — known as the Thaanaana Thirumeni, or \"the very body itself.\" Unlike the mummification traditions of Egypt, where bodies are laid flat, wrapped, and treated with layers of chemical preservatives, Ramanuja's form has instead been kept upright in a seated position for nearly nine centuries using only sandalwood paste and saffron, with no chemical treatment at all. Twice each year, priests apply a fresh coat of camphor mixed with vermilion, giving the figure its distinctive ochre tint — a practice carried on, by tradition, without interruption since the 12th century. It stands as one of the rare instances anywhere in Hindu worship where an actual human body, rather than a sculpted image, is kept enshrined and offered daily reverence within a temple.",
      "Later Chola and Pandya rulers, including Kulothunga Chola III and Maravarman Sundara Pandyan, took an active hand in temple governance, while the Hoysala brothers Someswara and Ramanatha laid out a garden, paved an enclosure, and built the Venugopala shrine. Jatavarman Sundara Pandya went further still, funding extensive gold plating of the temple's idols and sanctuaries — work so lavish that he is remembered as one of the temple's great benefactors in precious metal. It was during the reign of his successor, Kulasekhara Pandya, that the Venetian traveler Marco Polo is said to have visited Srirangam and recorded its wealth and splendor."
    ],
    "image": "/srirangam/history-ramanuja.jpg",
    "imagePosition": "top"
  },
  {
    "title": "Invasion and a Long Recovery",
    "paragraphs": [
      "That prosperity drew unwanted attention. In 1311, the forces of the Delhi Sultanate's general Malik Kafur descended on Srirangam, ravaging the shrine and stripping it of its accumulated treasures and valuables. A little over a decade later, in 1322, Mohammed bin Tughlaq launched a second invasion, helping himself to whatever riches Malik Kafur's raid had left behind. This time, though, the temple's priests had seen the danger coming — anticipating Tughlaq's assault, they quietly carried off a number of idols and precious jewels ahead of the attack, preserving at least a portion of the temple's treasures from being lost for good. Between them, these two raids brought an end to what is remembered as a roughly four-hundred-year golden age in Srirangam's history, and the temple entered a long period of decline."
    ]
  },
  {
    "title": "The Forty-Eight-Year Exile of Nam Perumal",
    "paragraphs": [
      "That second raid, in particular, has its own well-remembered chapter. By 1323, Ulugh Khan — the future Muhammad bin Tughlaq — had pushed south, made Madurai his base, and turned Srirangam itself into a fortified military outpost. The attack came at the worst possible moment: the temple was in the middle of its Panguni Uthiram festival, and the processional idol, Azhagiya Manavala Perumal, had just completed its procession and was on its way to the Cauvery for a ceremonial river bath when word arrived that the invading army was closing in. The temple's own chronicle, the Koil Ozhugu, records that a large number of devotees gathered nearby were killed by the advancing troops before the army pressed on toward Madurai.",
      "Rather than let the sacred image fall into enemy hands, the aging Vaishnava teacher Pillai Lokacharya took personal charge of moving it to safety, along with its two consort deities, the Ubhaya Nachiyars. Over the years that followed he carried them from refuge to refuge to stay ahead of the invaders — first to Kodikkulam near Madurai, then into hiding in a cave near the Anaimalai hills, where he continued to perform daily worship until his own death. From there, a small band of devoted attendants carried the idols onward through the forests around Chandragiri and finally to the safety of Tirumala. Three of them are remembered by name — Gurukoor Dasar, his brother-in-law Srivilliputhur Dasar, and Gurukoor Dasar's son Sri Rama Dasar — while others in the party are said to have died of age or hardship along the way.",
      "The idol remained sheltered at Tirumala for some 48 years, from 1323 until 1371, during which no proper worship could be held at Srirangam itself; the spot at Tirupati where it was kept safe is still known today as the \"Sriranga Mandapam.\" Its return came only once the Vijayanagara empire drove the Madurai Sultanate back in the 1360s. A Vijayanagara general named Gopanna learned where the idol had been kept, travelled to Tirumala to retrieve it, paused at Gingee to perform poojas along the way, and finally brought it home to Srirangam, where it was formally reinstalled on 6 June 1371. So many years had passed that no one could be entirely certain it was truly the same image — until a single elderly washerman, who remembered the idol from before the invasion, was brought in to confirm it. It was after this long-awaited homecoming that Azhagiya Manavalan came to be affectionately known as \"Nam Perumal\" — \"Our Own Lord.\"",
      "That bond between the two shrines never really faded. Since 2006, it has been kept alive as a living annual tradition: the Tirumala Tirupati Devasthanams sends silk vastrams to Sri Ranganatha at Srirangam every year on Kaisika Ekadasi in the Tamil month of Karthigai, and Srirangam, in turn, sends its own silk vastrams to Sri Venkateswara at Tirumala on the occasion of Anivara Asthanam — temple officials from each side carrying the offerings to the other in formal procession. What began as an act of protection during the darkest years of Srirangam's history continues, six and a half centuries later, as a quiet exchange of gratitude between the two temples.",
      "That same Vijayanagara patronage that brought the idol home in 1371 went on to fund the wider rebuilding of the temple complex over the following two centuries, continued later by the Nayak rulers who governed in Vijayanagara's wake. Support arrived in the form of generous gifts of jewels and money, along with land grants and endowments from rulers, nobles, and officials alike, and this steady backing funded a long, sustained programme of reconstruction. Several sanctuaries were rebuilt during this period, and it was in this era of revival that the image of Garudalwar — Vishnu's eagle-mount — was installed in the temple. The gopurams were sheathed in gold, reportedly using some 102 gold plates, the dvajastambha (flagstaff) was gilded, and the Sri Ranga Vimana itself was repaired and once again covered in gold.",
      "Even amid this restoration, the temple's affairs were not always peaceful. Its priests are remembered to have clashed fiercely with corrupt or unjust administrators during this time, defending the shrine's integrity with such conviction that some are said to have leapt to their deaths from the temple's towers in protest rather than allow the temple to fall into mismanaged hands.",
      "Among the Nayak rulers, Achyutappa Nayak stands out for having given up his throne at Thanjavur around 1600 to live at Srirangam among the devout community there, funding gold plating of the vimana, new gopurams and mandapams, and repairs to the outer walls. His successor Chokkanatha Nayak continued this work and is remembered for laying some of the roads in and around the temple, and Vijayaranga Chokkanatha Nayak later added a mandapam in the third courtyard along with the ornate Kannadiyarai, or mirror hall, and commissioned life-sized ivory statues of himself and his family — a devotion to Ranganatha still visible today in the many carved images of Nayak rulers found on the temple's pillars."
    ]
  },
  {
    "title": "The Legend of Thulukka Nachiyar",
    "paragraphs": [
      "One story tied to this dark chapter has stayed alive in temple tradition long after the invasions themselves faded into history. When Malik Kafur's raiders carried off Azhagiya Manavalan — the processional festival idol of Ranganatha — the temple at Srirangam fell silent. Its gates were ceremonially sealed under thirukkappu, and for a long stretch afterward, no festivals could be held at all.",
      "Back in Delhi, meanwhile, the idol had caught the eye of someone in Malik Kafur's own household. His daughter, the princess Surathani, was struck by the gentle beauty of Arangan's face the moment the soldiers brought him in, and she begged her father not to melt this one down as he had done with so much else — she wanted to keep him for herself, as a doll to play with. Malik Kafur indulged her, and Surathani carried the idol off to her own chambers. In the weeks that followed she scarcely left his side: she bathed him, dressed him, offered him food, and kept him close even at night. Moved by her devotion, Ranganatha is said to have begun appearing before her in her dreams, revealing himself to her in one divine form after another — and somewhere in the midst of all this care and wonder, Surathani, without quite realizing it, fell in love with him.",
      "Word eventually reached the temple through a devotee named Karambanur Ammaiyar, who happened to be present at Srirangam around this time and brought news of where the idol had ended up. Knowing that the ruling Sultan in Delhi had a deep love of music and dance, the temple sent a troupe of its own singers and dancers north to seek an audience with him. Their performance so delighted the Sultan that he offered them a fortune in return — gold and diamond jewelry, fine ornaments, muslin cloth, and silk garments. The troupe turned it all down. Puzzled, the Sultan asked whether his gifts simply weren't generous enough, or whether they wanted something else entirely. They told him plainly: the only thing they sought was the idol of Azhagiya Manavalan, the very one his own daughter had grown attached to and kept as her plaything.",
      "The Sultan thought this over and gave them an unusual test rather than a straightforward answer: let them sing before Azhagiya Manavalan themselves, he said, and if the Lord chose to respond and come to them, they could take him home. The troupe began their song of praise without hesitation — and before long, the idol is said to have granted them darshan, moving toward the singers in response to their devotion, to the joy of everyone present.",
      "It was the Sultan's daughter, deeply attached to the idol she had come to think of as her own, who could not accept its departure. Unable to bear the separation, she is said to have followed the singers all the way back to Srirangam, where she came to be enshrined at the temple as a consort of Ranganatha, worshipped ever since as Thulukka Nachiyar, or Bibi Nachiyar. A small shrine to her stands near the Arjuna Mandapam, close to the main sanctum, and her memory shapes small rituals that continue at the temple to this day — Ranganatha is offered wheat rotis rather than the customary rice dishes, and dressed at times in colored cloth rather than plain white, said to honor her tastes. She is also formally honored each year during the spring festival of Panguni Uthiram.",
      "The episode is remembered as legend rather than verified history — there's no independent historical record identifying a specific Sultan's daughter connected to Srirangam — but it has endured precisely because of what it represents: a story of devotion crossing every boundary that might ordinarily have kept it apart."
    ],
    "image": "/srirangam/history-thulukka-nachiyar.jpg",
    "imagePosition": "top",
    "inlineImages": [
      {
        "src": "/srirangam/history-nachiyar-end.jpg",
        "beforeParagraph": 6
      }
    ]
  },
  {
    "title": "Through War, Colonial Rule, and Independence",
    "paragraphs": [
      "The turbulence of the 17th and 18th centuries drew Srirangam into more worldly conflicts. Its fortress-like walls made it a strategic position for the Nawabs of Arcot and later Chanda Sahib, and as British and French forces competed for control of the region, local Muslim rulers garrisoned troops within the temple's outer courtyards. Both colonial powers are said to have coveted the temple's rich endowments, though neither succeeded in claiming them.",
      "British authority over the region became absolute in 1801, and with it came direct control over Tamil Nadu's temples, including Srirangam. Temple lands were taken over, replaced with an annual government allowance for its upkeep. After independence, administration passed to the state's Hindu Religious and Charitable Endowments Department, under which the temple has continued to be restored toward its historic grandeur."
    ],
    "image": "/srirangam/history-colonial.jpg",
    "imagePosition": "top"
  },
  {
    "title": "The Srirangam Sri Renganthar Temple Festivals Today",
    "paragraphs": [
      "Dedicated to Vishnu in his form as Ranganatha, the temple complex today spans some 156 acres, ringed by seven concentric walls, or prakarams, said to represent the seven planetary systems of Vedic cosmology — and, in another reading favored by devotees, the seven spiritual planes a soul crosses on its way to the divine presence. Twenty-one gopurams punctuate these walls, the tallest among them — the Rajagopuram — rising to roughly 236 feet, the highest temple tower in Asia and visible from as far as ten miles away on a clear day. Though its foundations and lower tiers are centuries old, the tower as it stands today, built up to traditional architectural specifications, was only finally completed in 1987. A significant part of Srirangam town itself lies within the outer three enclosures.",
      "Within its walls the complex holds some 52 sub-shrines dedicated to other deities, alongside its many mandapas and sacred water tanks. Above the main sanctum rises the temple's golden Vimana, crafted in the shape of the Pranava — the sacred syllable Om — a design believed to embody the very sound at the root of creation. Worship here follows the Pancharatra Agama tradition, specifically the Parameswara Samhita, a system of ritual that has been carried on, largely unbroken, for well over a thousand years.",
      "Walking through the complex, visitors are met with wall after wall of intricately carved sculpture, the work of generations of artisans who devoted themselves to narrating the stories and teachings of Hindu scripture in stone. The temple's numerous mandapas, similarly adorned, continue to serve as spaces for ritual, devotional singing (kirtans), and religious discourse (pravachans) — much as they have for well over a thousand years.",
      "Nowhere is the temple's living devotion more visible than during Vaikuntha Ekadasi, its grandest annual festival, held over roughly twenty days each Margazhi (December–January) and divided into two ten-day halves, Pagal Pathu and Ira Pathu. Its culminating moment comes at daybreak on Vaikuntha Ekadasi itself, when Namperumal, arrayed in an armor of diamonds and gems, is carried through the Paramapada Vasal — the northern gateway to the thousand-pillared hall — a passage opened only this once each year. Popularly called the Swarga Vasal, or \"gateway to heaven,\" it carries a cherished belief among devotees that passing through it grants entry to Vaikuntha itself, Vishnu's own celestial abode. The pull of that promise is immense: the festival alone is said to draw upward of a million pilgrims to Srirangam over its course, making it one of the largest single gatherings at any Vaishnava temple in the country.",
      "Beyond Vaikuntha Ekadasi, the temple's calendar stays full nearly year-round — Panguni Uthiram and Brahmotsavam in spring, the Chithirai car festival, Vasanthotsavam in early summer, and Jyeshtabhishekam among them — with Namperumal carried through the streets on richly decorated mounts at each, so that devotees can receive his blessing outside the sanctum as well as within it.",
      "That thousand-pillared hall — the Aayiram Kaal Mandapam — is itself one of the temple's great architectural achievements, and like so much else at Srirangam, it owes its existence to the Vijayanagara restoration. It was raised in granite during the reign of Krishnadevaraya, the empire's most celebrated ruler, sometime in the early 16th century, and laid out like a planned theatre: one long central aisle runs the length of the hall, crossed at right angles by transepts of matching scale, with rows of evenly spaced pillars filling the space on either side. Despite its name, careful counts have found the hall holds 953 pillars rather than a full thousand, though the name has stuck regardless. Each pillar carries its own carved detail, and the Nayak rulers who came after the Vijayanagara era added a companion hall nearby, the Sesharayar Mandapam, prized for its monolithic pillars carved with rearing horses trampling tigers beneath their hooves.",
      "The evening before this culminating moment carries its own striking ritual. On the tenth and final day of Pagal Pathu, Namperumal is adorned not in his usual form but as Mohini, Vishnu's enchanting feminine incarnation — a decoration known as Mohini Alankaram, or Nachiyar Thirukolam. Dressed in fine white silk and jewelry, the deity is carried in procession around the temple's inner precinct, drawing crowds nearly as large as those of Ekadasi day itself. Tradition ties the form back to the story of Mohini luring the nectar of immortality away from the demons during the great churning of the ocean, and its appearance here, on the very eve of the gates of Vaikuntha opening, is treated as a moment of particular grace — a last, radiant vision of the Lord before devotees pass, the next morning, through the Paramapada Vasal itself."
    ],
    "image": "/srirangam/history-festivals.jpg",
    "imagePosition": "top",
    "inlineImages": [
      {
        "src": "/srirangam/history-paramapada.jpg",
        "beforeParagraph": 7
      }
    ]
  }
];
