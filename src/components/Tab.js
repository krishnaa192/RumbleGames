
import Action from '../assets/Action.svg';
import Adventure from '../assets/AdventureB.svg';
import Arcade from '../assets/Arcade.svg';
import Board from '../assets/BoardB.svg';
import Casual from '../assets/CasualC.svg';
import Puzzle from '../assets/Puzzle.svg';
import Racing from '../assets/Sports.svg';
import AllGames from '../assets/All.svg';
import All_blue from '../assets/all_normal.svg';
import Action_Selected from '../assets/Action_selected.svg';
import Arcade_selected from '../assets/Arcade_selected.svg';
import Puzzle_selected from '../assets/Arcade_selected.svg';
import Sport_selected from '../assets/Sports_selected.svg';
import all_tab from '../assets/all_tab.svg';
import all_cat from '../assets/Home_dark.svg';
import action_tab from '../assets/action_tab.svg';
import Action_cat from '../assets/Action_Category.svg';
import Arcade_cat from '../assets/Arcade_Cat.svg';
import Arcade_tab from '../assets/Arcade_Category.svg';
import Sports_cat from '../assets/Sports_Category.svg';
import Sports_tab from '../assets/sport_tab.svg';
import Puzzle_cat from '../assets/Puzzle_Category.svg';
import Puzzle_tab from '../assets/Puzzle_tab.svg';
import Adventure_active from '../assets/Adventure.svg';
import adventure_tab from '../assets/adventure_tab.svg';
import adv_active from '../assets/adv.svg';
import Board_cat from '../assets/Board.svg';
import board_tab from '../assets/board_tab.svg';
import board_active from '../assets/board-active.svg';
import casual_active from '../assets/casual_active.svg';
import casual_atab from '../assets/casual_activetab.svg';
import casual_tab from '../assets/casual_tab.svg';

export const Categories = [
  { name: 'All', path: '/allgames',activeicon: AllGames,icon:All_blue,tab:all_tab,actite_tab:all_cat },
  { name: 'Action', path: '/games/Action',icon:Action ,activeicon:Action_Selected,tab:action_tab,actite_tab:Action_cat},
  { name: 'Adventure', path: '/games/Adventure',icon:Adventure ,activeicon:Adventure_active,tab:adventure_tab,actite_tab:adv_active},
  { name: 'Arcade', path: '/games/Arcade',icon:Arcade,activeicon:Arcade_selected ,tab:Arcade_tab, actite_tab:Arcade_cat},
  { name: 'Board', path: '/games/Board',icon:Board,activeicon:Board_cat,tab:board_tab,actite_tab:board_active  },
  { name: 'Casual', path: '/games/Casual',icon:Casual,activeicon:casual_active ,tab:casual_tab,actite_tab:casual_atab},
  { name: 'Puzzle', path: '/games/Puzzle',icon:Puzzle,activeicon:Puzzle_selected ,tab:Puzzle_tab, actite_tab:Puzzle_cat },
  { name: 'Sports', path: '/games/Sports',icon:Racing,activeicon:Sport_selected ,tab:Sports_tab,actite_tab:Sports_cat}
];


export const CategoryDescripton =[
  {
    name: "Action",
    description: "Players who love feeling their pulse race and their eyes light up at dazzling graphics will love action games. They're not just about the action, though.These games often have deep stories and tricky tasks that pull players into riveting tales and let them explore many different imaginary places. Gamershave to come up with quick answers, manage detailed motions, and create smart battle plans."
  },
  {
    name: "Adventure",
    description: "Step into worlds unknown, where every path leads to wonder and every challenge unlocks a new secret. Adventure games take you beyond the ordinary—into ancient ruins, enchanted forests, and futuristic realms. With every quest, you become the hero of your own story. Ready your courage, sharpen your mind—your epic journey begins now. Adventure awaits those who dare!"
  },
  {
    name: "Arcade",
    description:"Jump into a world of nonstop action, flashing lights, and high scores! Arcade games bring back the thrill of classic gameplay—simple to play, tough to master, and endlessly addictive. From pixelated heroes to neon speed runs, every moment is packed with fast reflexes and pure fun. Compete, replay, and chase that top score again and again. It’s all about the challenge, the fun, and the feeling of ‘just one more game!"
  },
  {
    name: "Board",
    description: "Roll the dice, draw a card, and let the game night begin! Board games bring people together through strategy, laughter, and a touch of luck. Whether you're building empires, solving mysteries, or bluffing your way to victory—every move matters. Perfect for family fun, friendly rivalries, or epic showdowns that last for hours. In a world of endless choices, the board is your battlefield!"
  },
  {
    name: "Casual",
    description:"Easy to pick up, hard to put down—casual games are your perfect everyday escape. Whether it's matching colors, popping bubbles, or solving light puzzles, fun is always just a tap away. No pressure, no steep learning curves—just pure enjoyment at your own pace. Ideal for a quick break, a relaxing moment, or a little brain boost on the go. Wherever you are, play your way and unwind anytime!"

  },
  {
    name: "Puzzle",
    description: "Unlock your mind and dive into a world of clever twists and tricky turns. Puzzle games challenge your logic, test your memory, and reward every 'aha!' moment. From sliding tiles to matching gems to solving riddles—each level brings a fresh mental workout. Whether you're a casual thinker or a master strategist, there's always a new mystery to crack. Get ready to think outside the box and have fun doing it!"
    },
    {
      name: "Sports",
      description: "Whether you're chasing goals or chasing the finish line, sports and racing games bring the ultimate rush of competition. Feel the intensity of the field and the speed of the track—where every move, pass, and turn can lead to glory. Precision, power, and passion drive every match and every race. From team victories to solo triumphs, it’s all about skill, strategy, and the will to win. Get ready to play hard, race fast, and rise to the top!"
      }
]

