/// Wordlist where each word has a unique 3-letter prefix. There are 1024 words
/// so that each word gives us 10 bits of entropy, which lets us get 16 bytes of
/// entropy from 13 words. A small wordlist also helps us keep our memory
/// footprint lower.
export const uniquePrefixLen = 3;
export const wordlist = [
    'abandon',
    'ability',
    'able',
    'about',
    'abroad',
    'absence',
    'abuse',
    'academy',
    'accept',
    'achieve',
    'acid',
    'acquire',
    'across',
    'action',
    'adapt',
    'address',
    'adjust',
    'admit',
    'adopt',
    'adult',
    'advice',
    'affect',
    'afraid',
    'after',
    'against',
    'agency',
    'ago',
    'agree',
    'ahead',
    'airport',
    'aisle',
    'alarm',
    'album',
    'alcohol',
    'alive',
    'allow',
    'almost',
    'along',
    'already',
    'also',
    'alter',
    'always',
    'amazing',
    'amid',
    'among',
    'analyst',
    'ancient',
    'angry',
    'animal',
    'ankle',
    'annual',
    'another',
    'answer',
    'anxiety',
    'anyone',
    'apart',
    'apology',
    'appear',
    'area',
    'argue',
    'arise',
    'army',
    'around',
    'arrive',
    'article',
    'aside',
    'asleep',
    'aspect',
    'assume',
    'atop',
    'attack',
    'auction',
    'audio',
    'aunt',
    'author',
    'average',
    'avoid',
    'away',
    'awful',
    'baby',
    'back',
    'badly',
    'bake',
    'ball',
    'bank',
    'barely',
    'base',
    'battle',
    'beat',
    'because',
    'bedroom',
    'beer',
    'before',
    'begin',
    'behind',
    'being',
    'believe',
    'benefit',
    'best',
    'between',
    'beyond',
    'bias',
    'bike',
    'billion',
    'bind',
    'biology',
    'bird',
    'bishop',
    'bite',
    'bizarre',
    'black',
    'blend',
    'blind',
    'blood',
    'blue',
    'board',
    'body',
    'boil',
    'bold',
    'bomb',
    'bone',
    'book',
    'born',
    'boss',
    'both',
    'bounce',
    'bowl',
    'box',
    'boy',
    'brain',
    'break',
    'bring',
    'brother',
    'brush',
    'bubble',
    'buck',
    'budget',
    'bug',
    'build',
    'bullet',
    'bunch',
    'burn',
    'busy',
    'butter',
    'buyer',
    'cable',
    'cafe',
    'cage',
    'cake',
    'call',
    'camera',
    'can',
    'capital',
    'care',
    'case',
    'catch',
    'cause',
    'cave',
    'cease',
    'ceiling',
    'cell',
    'center',
    'certain',
    'change',
    'check',
    'child',
    'choose',
    'chronic',
    'church',
    'circle',
    'city',
    'civil',
    'class',
    'clear',
    'client',
    'close',
    'club',
    'coach',
    'cocaine',
    'code',
    'coffee',
    'coin',
    'college',
    'come',
    'control',
    'cook',
    'copy',
    'corner',
    'cost',
    'cotton',
    'could',
    'cover',
    'cow',
    'crazy',
    'create',
    'crime',
    'crowd',
    'crucial',
    'crystal',
    'cue',
    'culture',
    'cup',
    'current',
    'custom',
    'cute',
    'cycle',
    'dad',
    'daily',
    'damage',
    'danger',
    'dark',
    'data',
    'dawn',
    'day',
    'death',
    'debate',
    'decide',
    'deep',
    'defense',
    'degree',
    'deliver',
    'demand',
    'deny',
    'depend',
    'despite',
    'detail',
    'develop',
    'diamond',
    'dictate',
    'diet',
    'differ',
    'digital',
    'dilemma',
    'dinner',
    'dip',
    'direct',
    'disease',
    'divide',
    'doctor',
    'dog',
    'dollar',
    'domain',
    'donor',
    'door',
    'dose',
    'doubt',
    'down',
    'dozen',
    'draw',
    'dream',
    'drive',
    'drop',
    'drug',
    'dry',
    'duck',
    'dump',
    'during',
    'dust',
    'duty',
    'dying',
    'dynamic',
    'each',
    'eager',
    'early',
    'easy',
    'eating',
    'echo',
    'economy',
    'edge',
    'editor',
    'educate',
    'effect',
    'egg',
    'ego',
    'either',
    'elbow',
    'elderly',
    'element',
    'elite',
    'else',
    'embrace',
    'emerge',
    'emotion',
    'empty',
    'enable',
    'endure',
    'energy',
    'enforce',
    'engage',
    'enhance',
    'enjoy',
    'enough',
    'ensure',
    'enter',
    'episode',
    'equal',
    'error',
    'escape',
    'essay',
    'estate',
    'ethnic',
    'even',
    'evident',
    'evolve',
    'exactly',
    'except',
    'execute',
    'exhibit',
    'exist',
    'exotic',
    'expect',
    'extend',
    'eye',
    'fabric',
    'fact',
    'fade',
    'fail',
    'fall',
    'family',
    'fantasy',
    'farm',
    'fast',
    'father',
    'fault',
    'favor',
    'fear',
    'federal',
    'feel',
    'fellow',
    'female',
    'fence',
    'fever',
    'fewer',
    'fiber',
    'fiction',
    'field',
    'figure',
    'film',
    'find',
    'first',
    'fish',
    'fitness',
    'fixed',
    'flag',
    'flee',
    'flight',
    'floor',
    'fluid',
    'flying',
    'focus',
    'fog',
    'follow',
    'food',
    'force',
    'foster',
    'frame',
    'free',
    'friend',
    'from',
    'fruit',
    'fuel',
    'full',
    'fund',
    'fury',
    'future',
    'gain',
    'gallery',
    'game',
    'gang',
    'garden',
    'gather',
    'gay',
    'gaze',
    'gear',
    'general',
    'gesture',
    'ghost',
    'giant',
    'gift',
    'girl',
    'give',
    'glass',
    'glimpse',
    'global',
    'goal',
    'gold',
    'good',
    'gospel',
    'govern',
    'grade',
    'great',
    'grip',
    'group',
    'guard',
    'guess',
    'guide',
    'gulf',
    'gut',
    'guy',
    'gym',
    'habit',
    'hair',
    'half',
    'hammer',
    'hand',
    'happen',
    'hard',
    'hate',
    'haul',
    'have',
    'hazard',
    'hear',
    'heel',
    'height',
    'help',
    'hence',
    'here',
    'hide',
    'high',
    'hill',
    'himself',
    'hint',
    'hip',
    'hire',
    'history',
    'hockey',
    'hold',
    'home',
    'honor',
    'hook',
    'hope',
    'horse',
    'host',
    'hotel',
    'house',
    'however',
    'huge',
    'human',
    'hundred',
    'hurt',
    'husband',
    'ice',
    'icon',
    'idea',
    'ignore',
    'image',
    'immune',
    'impact',
    'include',
    'indeed',
    'inform',
    'inherit',
    'initial',
    'injury',
    'inmate',
    'inner',
    'input',
    'inquiry',
    'inside',
    'into',
    'involve',
    'iron',
    'island',
    'isolate',
    'issue',
    'item',
    'itself',
    'jacket',
    'jail',
    'jaw',
    'jazz',
    'jeans',
    'jewelry',
    'job',
    'join',
    'joke',
    'journal',
    'joy',
    'judge',
    'juice',
    'jump',
    'junior',
    'jury',
    'just',
    'keep',
    'key',
    'kick',
    'kill',
    'kind',
    'kiss',
    'kitchen',
    'knee',
    'knife',
    'know',
    'labor',
    'lack',
    'lady',
    'lake',
    'lamp',
    'land',
    'large',
    'last',
    'later',
    'laugh',
    'layer',
    'leave',
    'lecture',
    'left',
    'legal',
    'lemon',
    'length',
    'less',
    'letter',
    'level',
    'library',
    'license',
    'life',
    'light',
    'like',
    'limit',
    'line',
    'lion',
    'liquid',
    'listen',
    'little',
    'live',
    'loan',
    'lobby',
    'local',
    'logic',
    'long',
    'look',
    'lord',
    'lose',
    'lots',
    'loud',
    'love',
    'lower',
    'loyalty',
    'lucky',
    'lunch',
    'machine',
    'madness',
    'magic',
    'main',
    'major',
    'make',
    'male',
    'mama',
    'many',
    'market',
    'matter',
    'maximum',
    'maybe',
    'mean',
    'medical',
    'meet',
    'melt',
    'member',
    'mention',
    'merely',
    'message',
    'method',
    'middle',
    'might',
    'million',
    'minute',
    'mirror',
    'miss',
    'mixture',
    'mobile',
    'model',
    'moment',
    'money',
    'moon',
    'more',
    'most',
    'mother',
    'mouth',
    'move',
    'much',
    'mud',
    'murder',
    'must',
    'mutual',
    'myself',
    'myth',
    'nail',
    'naked',
    'name',
    'narrow',
    'nasty',
    'nation',
    'navy',
    'nearly',
    'neck',
    'need',
    'neither',
    'nervous',
    'nest',
    'network',
    'neutral',
    'never',
    'news',
    'next',
    'nice',
    'night',
    'nobody',
    'noise',
    'nominee',
    'none',
    'noon',
    'north',
    'nose',
    'nothing',
    'novel',
    'nowhere',
    'nuclear',
    'number',
    'nurse',
    'nut',
    'oak',
    'object',
    'observe',
    'obtain',
    'obvious',
    'occur',
    'ocean',
    'odds',
    'office',
    'often',
    'okay',
    'old',
    'once',
    'ongoing',
    'onion',
    'only',
    'onto',
    'open',
    'opinion',
    'oppose',
    'option',
    'orange',
    'orbit',
    'order',
    'organic',
    'origin',
    'other',
    'ought',
    'ounce',
    'ours',
    'outside',
    'over',
    'owner',
    'oxygen',
    'package',
    'page',
    'pain',
    'pale',
    'panel',
    'paper',
    'part',
    'pass',
    'patient',
    'pause',
    'payment',
    'peace',
    'peer',
    'penalty',
    'people',
    'pepper',
    'percent',
    'pet',
    'phase',
    'photo',
    'phrase',
    'physics',
    'piano',
    'pick',
    'piece',
    'pilot',
    'pink',
    'pioneer',
    'pipe',
    'pitch',
    'pizza',
    'place',
    'please',
    'plot',
    'plus',
    'pocket',
    'poem',
    'point',
    'poke',
    'policy',
    'pond',
    'poor',
    'popular',
    'portion',
    'pose',
    'potato',
    'pound',
    'poverty',
    'power',
    'prayer',
    'prepare',
    'price',
    'problem',
    'public',
    'pull',
    'pump',
    'punish',
    'purpose',
    'push',
    'put',
    'puzzle',
    'quality',
    'queen',
    'quite',
    'quote',
    'rabbit',
    'race',
    'radio',
    'rage',
    'raise',
    'rally',
    'range',
    'rapidly',
    'rare',
    'rate',
    'really',
    'rebuild',
    'receive',
    'reduce',
    'reflect',
    'region',
    'reject',
    'relate',
    'remain',
    'rent',
    'report',
    'require',
    'result',
    'return',
    'reveal',
    'reward',
    'rhythm',
    'ribbon',
    'rich',
    'ride',
    'rifle',
    'right',
    'ring',
    'riot',
    'risk',
    'ritual',
    'river',
    'road',
    'robot',
    'rock',
    'role',
    'romance',
    'room',
    'rope',
    'route',
    'royal',
    'rubber',
    'ruin',
    'rule',
    'rumor',
    'running',
    'rural',
    'rush',
    'sacred',
    'safety',
    'sail',
    'salt',
    'same',
    'sand',
    'satisfy',
    'sauce',
    'save',
    'say',
    'scale',
    'scene',
    'school',
    'science',
    'score',
    'screen',
    'season',
    'second',
    'see',
    'segment',
    'seize',
    'sell',
    'seminar',
    'send',
    'service',
    'session',
    'settle',
    'several',
    'share',
    'sheet',
    'ship',
    'should',
    'shrug',
    'shut',
    'shy',
    'sibling',
    'sick',
    'side',
    'sign',
    'silence',
    'simply',
    'since',
    'sister',
    'site',
    'size',
    'skill',
    'skull',
    'sky',
    'slave',
    'sleep',
    'slip',
    'slowly',
    'small',
    'smell',
    'smile',
    'smoke',
    'snap',
    'sneak',
    'snow',
    'soap',
    'social',
    'sodium',
    'soft',
    'soil',
    'soldier',
    'some',
    'song',
    'soon',
    'sort',
    'source',
    'space',
    'speak',
    'sphere',
    'spirit',
    'split',
    'sport',
    'spring',
    'spy',
    'square',
    'state',
    'step',
    'still',
    'story',
    'street',
    'student',
    'style',
    'subject',
    'such',
    'sudden',
    'suffer',
    'suggest',
    'suit',
    'summer',
    'sunset',
    'support',
    'sure',
    'suspect',
    'swallow',
    'sweet',
    'swing',
    'sword',
    'symbol',
    'system',
    'table',
    'tactic',
    'tail',
    'take',
    'talk',
    'tank',
    'tape',
    'target',
    'task',
    'tax',
    'team',
    'tech',
    'teen',
    'tell',
    'temple',
    'tend',
    'term',
    'test',
    'text',
    'that',
    'they',
    'this',
    'those',
    'through',
    'thus',
    'ticket',
    'tide',
    'tiger',
    'till',
    'time',
    'tiny',
    'tired',
    'tissue',
    'title',
    'tobacco',
    'today',
    'toilet',
    'toll',
    'tomato',
    'tonight',
    'tool',
    'topic',
    'toss',
    'total',
    'tough',
    'toward',
    'toxic',
    'toy',
    'trade',
    'tree',
    'trial',
    'trouble',
    'true',
    'try',
    'tube',
    'tuck',
    'tumor',
    'tunnel',
    'turn',
    'twenty',
    'twice',
    'type',
    'ugly',
    'unable',
    'uncle',
    'under',
    'unfair',
    'unhappy',
    'union',
    'unknown',
    'unless',
    'until',
    'unusual',
    'update',
    'upon',
    'upper',
    'upset',
    'urban',
    'urge',
    'used',
    'usually',
    'utility',
    'vaccine',
    'value',
    'vanish',
    'various',
    'vast',
    'vehicle',
    'venture',
    'very',
    'vessel',
    'veteran',
    'victim',
    'video',
    'view',
    'village',
    'violent',
    'virus',
    'visit',
    'vital',
    'voice',
    'volume',
    'vote',
    'wage',
    'wait',
    'wake',
    'walk',
    'want',
    'warm',
    'waste',
    'water',
    'wave',
    'way',
    'wear',
    'web',
    'wedding',
    'week',
    'weight',
    'well',
    'west',
    'what',
    'when',
    'which',
    'whole',
    'why',
    'wide',
    'wife',
    'will',
    'window',
    'wipe',
    'wire',
    'wish',
    'with',
    'wolf',
    'woman',
    'wonder',
    'wood',
    'work',
    'would',
    'wrap',
    'write',
    'wrong',
    'yard',
    'year',
    'yellow',
    'yield',
    'you',
    'zone',
];
