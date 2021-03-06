export class LabelsService {
  testLabels = [
    'Data Analysis',
    'Copywriting',
    'Foreign Languages',
    'Accounting',
    'Computer Languages',
    'Mathematics',
    'Graphic Design',
    'Planning / Event Planning',
    'SEO / SEM Marketing',
    'Bookkeeping',
    'Communication',
    'Ability to Work Under Pressure',
    'Decision Making',
    'Time Management',
    'Self-motivation',
    'Conflict Resolution',
    'Leadership',
    'Adaptability',
    'Teamwork',
    'Creativity',
    'Speak and write in fluent Spanish.',
    'Proficient in Microsoft Office including Excel and Powerpoint.',
    'Working knowledge of WordPress.',
    'Able to manage and implement Social Media campaigns.',
    'Excellent written and verbal communication skills.',
    'Excellent editing skills.',
    'Able to translate complex text into easily readable material.',
    'Conduct webinars.',
    'Attend informal dinner meetings.',
    'Speak in front of large groups.',
    'Discuss and present software.',
    'Analytical',
    'Adaptable (work in changing environment)',
    'Quick Learner',
    'Able to Build Relationships',
    'Loyal and Discreet (maintain confidentiality)',
    'Flexible',
    'Responsible',
    'Able to Operate Under Pressure',
    'Efficient',
    'Detail-oriented',
    'Computer and Internet Skills',
    'Written and Verbal Communication',
    'Organizational Skills',
    'Multi-tasking',
    'Time Management',
    'The boldest yak exactly flirted.',
    'The alert lake dimly riposted.',
    'The excited horn quirkily cut.',
    'The bright hoe lightly jingled.',
    'The amazed lamp crossly gulped.',
    'The clean hope clearly flicked.',
    'The amiable land really elbowed.',
    'The better twin kookily imbibed.',
    'The calm holiday elegantly hared.',
    'The brave hockey happily joyrode.',
    'The amusing people softly stomped.',
    'The alluring lamb upbeat slammed.',
    'The capable home well fertilized.',
    'The faith milk softly alkalinized.',
    'The cheerful hook lovingly fowled.',
    'The careful honey badly reinsured.',
    'The affable laborer sharply dived.',
    'The charming hood gently employed.',
    'The clever horse silently pleased.',
    'The ambitious loan lazily created.',
    'The amused language even demonized.',
    'The attracted latex easily grunted.',
    'The coherent hose correctly ganged.',
    'The free banjo immediately changed.',
    'The devoted chair courageously lost.',
    'The beautiful laugh cleverly phoned.',
    'The animated lasagna highly sheered.',
    'The adaptable history gladly vented.',
    'The detailed foot eagerly magnified.',
    'The dazzling hyena healthily loaded.',
    'The happy salad bitterly overcooked.',
    'The affectionate lace boldly fought.',
    'The sullen fairy lantern far framed.',
    'The communion hour sternly presumed.',
    'The frank kazoo defiantly slathered.',
    'The agreeable ladybug openly skewed.',
    'The attractive lathe silently longed.',
    'The confident house sadly chronicled.',
    'The considerate hub loosely freckled.',
    'The fearless hair mockingly contused.',
    'The great wiener frankly bituminized.',
    'The boundless lawyer tenderly dusted.',
    'The faithful snow seriously lip-read.',
    'The hope control deliberately ribbed.',
    'The efficient bunny carefully foraged.',
    'The dutiful governing body wisely fed.',
    'The dashing hydrogen viciously fudged.',
    'The courageous humor intently severed.',
    'The decorous ferret separately gawked.',
    'The amicable land mine yearly hovered.'
  ];

  getRandomLabel() {
    const index = Math.floor((Math.random() * this.testLabels.length));
    return this.testLabels[index];
  }
}
