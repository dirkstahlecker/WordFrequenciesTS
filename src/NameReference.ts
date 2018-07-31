// import * as React from 'react';

export class NameReference
{
    public static isName(word: string): boolean
    {
        word = word.toLowerCase();
        return NameReference.listOfNames.indexOf(word) > -1;
    }

    public static cleanWord(word: string): string
    {
        return word.replace(/\s/g, "");
    }

    public static listOfNames: string[] = [
        "simon",
        "claude",
        "jerry",
        "rowan",
        "damon",
        "liz",
        "lee",
        "mckenzie",
        "jareth",
        "woodie",
        "june",
        "federico",
        "ariel",
        "peyton",
        "wynnm",
        "eleni",
        "jackie",
        "jacky",
        "elise",
        "kort",
        "julia",
        "austin",
        "janelle",
        "madison",
        "ryan",
        "derek",
        "tess",
        "remington",
        "les",
        "dakota",
        "brittney",
        "jacob",
        "sara",
        "sharaya",
        "zach",
        "nate",
        "steffanie",
        "zachary",
        "gabrielle",
        "lando",
        "landon",
        "siegenfield",
        "tenessa",
        "jones",
        "gabe",
        "dournashkin",
        "edgar",
        "sheldon",
        "clio",
        "brittany",
        "elizabeth",
        "jeremy",
        "manting",
        "thomas",
        "patty",
        "bart",
        "ender",
        "gabby",
        "hobbes",
        "trent",
        "ari",
        "melody",
        "chrisantha",
        "ahmed",
        "madiha",
        "angela",
        "cali",
        "andy",
        "jaffe",
        "Jo",
        "dalia",
        "dion",
        "mira",
        "emily",
        "priya",
        "rin",
        "flora",
        "brayden",
        "alio",
        "phillip",
        "roosevelt",
        "erwin",
        "judy",
        "morgan",
        "natasha",
        "dennis",
        "clint",
        "brian",
        "forest",
        "chase",
        "becky",
        "sabina",
        "malena",
        "amin",
        "susan",
        "claire",
        "amit",
        "lindsay",
        "pelletti",
        "faruh",
        "jacqui",
        "scott",
        "cole",
        "veena",
        "warren",
        "felicia",
        "brett",
        "christie",
        "christi",
        "alli",
        "tyler",
        "isaac",
        "kaytlyn",
        "dan",
        "panov",
        "ruby",
        "bridger",
        "badger",
        "jennifer",
        "zack",
        "ck",
        "sira",
        "tory",
        "torri",
        "alisa",
        "yi-shiuan",
        "raku",
        "danielle",
        "lealia",
        "alex",
        "darcy",
        "james",
        "mun-ngha",
        "ruifansu",
        "augustine",
        "kristine",
        "ted",
        "juanita",
        "chuck",
        "corinn",
        "alec",
        "tiffany",
        "bradley",
        "rex",
        "quincy",
        "robert",
        "george",
        "hayden",
        "elisa",
        "daniel",
        "jessica",
        "melissa",
        "heather",
        "molly",
        "fred",
        "jill",
        "eitan",
        "taibo",
        "nisha",
        "dirk",
        "keith",
        "cait",
        "peinan",
        "david",
        "adrian",
        "kailyn",
        "andie",
        "rachel",
        "jesus",
        "shavey",
        "marcel",
        "tamara",
        "steveni",
        "stephanie",
        "ani",
        "ian",
        "john",
        "jamie",
        "albert",
        "alan",
        "jordan",
        "grace",
        "geran",
        "nathan",
        "mickey",
        "tommy",
        "tom",
        "micheala",
        "greg",
        "kody",
        "greta",
        "megan",
        "ashley",
        "dani",
        "ellena",
        "ana",
        "chloe",
        "caleb",
        "fiona",
        "carson",
        "allen",
        "beckett",
        "kevin",
        "zoe",
        "sherri",
        "malte",
        "brandon",
        "becca",
        "linda",
        "aofei",
        "lexie",
        "tevin",
        "kai",
        "jorge",
        "maddy",
        "julianna",
        "brent",
        "dina",
        "victoria",
        "scarlett",
        "jason",
        "kat",
        "beth",
        "sally",
        "michelle",
        "ria",
        "aisha",
        "phil",
        "christianna",
        "tamiko",
        "reed",
        "kristen",
        "frances",
        "raja",
        "lizy",
        "charles",
        "bonnie",
        "mikayla",
        "carlee",
        "gates",
        "evaristo",
        "randi",
        "duncan",
        "kade",
        "randy",
        "sierra",
        "caroline",
        "monica",
        "tricia",
        "dj",
        "carly",
        "alicia",
        "coty",
        "cristhian",
        "ben",
        "felipe",
        "vincent",
        "amanda",
        "harrison",
        "kim",
        "kitanna",
        "dillon",
        "hammer",
        "jacque",
        "ken",
        "eunice",
        "tamra",
        "felisha",
        "joe",
        "jj",
        "gwyn",
        "jon",
        "colton",
        "peter",
        "miso",
        "annie",
        "sasha",
        "rebekah",
        "elliot",
        "jeff",
        "jaya",
        "sammi",
        "jayd",
        "tony",
        "mady",
        "jyotishka",
        "nicole",
        "carla",
        "sam",
        "anton",
        "anurag",
        "karla",
        "mikey",
        "jess",
        "heman",
        "hemantha",
        "mike",
        "eduardo",
        "ariane",
        "andrew",
        "anthony",
        "stephen",
        "dave",
        "gal",
        "andrea",
        "kathryn",
        "will",
        "max",
        "yuliya",
        "ceri",
        "kaytlyn",
        "dominic",
        "robin",
        "ishaan",
        "veronica",
        "nika",
        "carlson",
        "tevis",
        "audrey",
        "despina",
        "ivy",
        "piotr",
        "grant",
        "eric",
        "dakotah",
        "paula",
        "everett",
        "kip",
        "jaclyn",
        "westin",
        "dylan",
        "ashley",
        "lucas",
        "charlie",
        "kyle",
        "crisantha",
        "joseff",
        "spencer",
        "nessa",
        "carrie",
        "gavin",
        "sheenan",
        "lauren",
        "hayley",
        "hal",
        "nick",
        "nikki",
        "josh",
        "rosa",
        "ada",
        "ross",
        "cheryl",
        "shelby",
        "jake",
        "menno",
        "chalese",
        "mattea",
        "mateo",
        "monique",
        "rebecca",
        "emilio",
        "maddie",
        "dencil",
        "suma",
        "kolton",
        "clarissa",
        "christina",
        "christine",
        "emma",
        "kinney",
        "arden",
        "jory",
        "patience",
        "joey",
        "patrick",
        "mirim",
        "michaela",
        "howell",
        "dean",
        "yulia",
        "donald",
        "seigenfeld",
        "huynh",
        "lorraine",
        "garret",
        "conner",
        "hugh",
        "wendy",
        "anna",
        "aaron",
        "wesley",
        "kristin",
        "francis",
        "iris",
        "prabhav",
        "justin",
        "coral",
        "stuart",
        "dwight",
        "carolyn",
        "chris",
        "ky-ahn",
        "steven",
        "tadd",
        "horkley",
        "katie",
        "akshay",
        "lexi",
        "shae",
        "shane",
        "caitlin",
        "melanie",
        "lydia",
        "predrag",
        "junior",
        "neerja",
        "waffles",
        "eddie",
        "cearston",
        "taylor",
        "jenny",
        "krista",
        "johnny",
        "feyza",
        "erin",
        "grammie",
        "andreea",
        "graham",
        "jenna",
        "cassie",
        "tim",
        "holly",
        "kira",
        "neha",
        "dale",
        "colin",
        "tenye",
        "matt",
        "barry",
        "sue",
        "lucia",
        "gray",
        "william",
        "evan",
        "kory",
        "stan",
        "lane",
        "jade",
        "natalie",
        "tanner",
        "corey",
        "elaine",
        "adam",
        "denny",
        "paige",
        "mirim",
        "shinjini",
        "laura",
        "sarah",
        "justine",
        "mollie",
        "adri",
        "katherine",
        "lin",
        "kathleen"
    ]
}

export default NameReference;
