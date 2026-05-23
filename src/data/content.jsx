import React from 'react';
import { 
  Scale, Factory, HardHat, Coins, Link2, 
  Sprout, Link as LinkIcon, Flame, Target, Zap, 
  Tent, Swords, Castle, BookOpen, LineChart, 
  Shield, Handshake, Globe,
  Landmark, Factory as FactoryIcon, Building, 
  Map, Mountain, HeartHandshake, Users, Flag
} from 'lucide-react';

export const FLIP_CARDS = [
  {
    icon: <Scale size={48} className="text-[var(--color-accent)]" />,
    title: 'Tập đoàn người',
    back: 'Giai cấp là những <strong>tập đoàn người</strong> có địa vị kinh tế - xã hội khác nhau trong một hệ thống sản xuất xã hội nhất định trong lịch sử.',
  },
  {
    icon: <Factory size={48} className="text-[var(--color-accent)]" />,
    title: 'Quan hệ với tư liệu sản xuất',
    back: 'Dấu hiệu chủ yếu: sự khác nhau về <strong>quan hệ đối với tư liệu sản xuất</strong> — ai sở hữu, ai không sở hữu tư liệu sản xuất.',
  },
  {
    icon: <HardHat size={48} className="text-[var(--color-accent)]" />,
    title: 'Vai trò lao động',
    back: 'Sự khác nhau về <strong>vai trò trong tổ chức lao động xã hội</strong> — ai quản lý, ai bị quản lý, ai tổ chức sản xuất.',
  },
  {
    icon: <Coins size={48} className="text-[var(--color-accent)]" />,
    title: 'Hưởng thụ của cải',
    back: 'Sự khác nhau về <strong>phương thức và quy mô hưởng thụ của cải xã hội</strong> — ai hưởng nhiều, ai hưởng ít, và bằng cách nào.',
  },
  {
    icon: <Link2 size={48} className="text-[var(--color-accent)]" />,
    title: 'Bóc lột & Bị bóc lột',
    back: 'Thực chất của quan hệ giai cấp chính là <strong>quan hệ giữa bóc lột và bị bóc lột</strong>, tập đoàn này chiếm đoạt lao động của tập đoàn khác.',
  },
]

export const TIMELINE_DATA = [
  {
    era: 'Nguồn gốc sâu xa',
    content: 'Sự phát triển của lực lượng sản xuất chưa đạt tới trình độ xã hội hóa cao. Khi năng suất lao động tăng lên, sản phẩm dư thừa bắt đầu xuất hiện.',
    icon: <Sprout size={32} className="text-[var(--color-accent)]" />,
  },
  {
    era: 'Chế độ tư hữu',
    content: 'Khi có của cải dư thừa, chế độ tư hữu ra đời, một nhóm người chiếm đoạt tư liệu sản xuất — dẫn đến sự phân hóa giai cấp trong xã hội.',
    icon: <LinkIcon size={32} className="text-[var(--color-accent)]" />,
  },
  {
    era: 'Mâu thuẫn không điều hòa',
    content: 'Đấu tranh giai cấp nổ ra là tất yếu do sự đối lập về lợi ích căn bản không thể điều hòa được giữa giai cấp bóc lột và giai cấp bị bóc lột.',
    icon: <Flame size={32} className="text-[var(--color-accent)]" />,
  },
  {
    era: 'Bản chất đấu tranh',
    content: 'Thực chất là cuộc đấu tranh của quần chúng bị áp bức, bóc lột chống lại giai cấp thống trị, bóc lột để giải phóng giai cấp và giải phóng xã hội.',
    icon: <Target size={32} className="text-[var(--color-accent)]" />,
  },
  {
    era: 'Động lực lịch sử',
    content: 'Đấu tranh giai cấp là động lực trực tiếp, quan trọng nhất của lịch sử trong xã hội có giai cấp — là chìa khóa giải quyết mâu thuẫn giữa LLSX và QHSX.',
    icon: <Zap size={32} className="text-[var(--color-accent)]" />,
  },
]

export const STRUGGLE_FORMS = [
  {
    label: 'Đấu tranh kinh tế',
    icon: 'TrendingUp',
    color: '#c8a04a',
    desc: 'Đấu tranh vì quyền lợi kinh tế hàng ngày: tiền lương, điều kiện lao động, bảo hiểm xã hội. Là hình thức đấu tranh sơ khai nhất.',
  },
  {
    label: 'Đấu tranh chính trị',
    icon: 'Building',
    color: '#b83030',
    desc: 'Đấu tranh giành và giữ chính quyền — hình thức cao nhất, quyết định nhất của đấu tranh giai cấp.',
  },
  {
    label: 'Đấu tranh tư tưởng',
    icon: 'BookOpen',
    color: '#2d8f5e',
    desc: 'Đấu tranh trên mặt trận lý luận, chống lại hệ tư tưởng và văn hóa phản động của giai cấp thống trị.',
  },
]

export const COMMUNITIES = [
  {
    name: 'Thị tộc',
    desc: 'Cộng đồng người đầu tiên, dựa trên quan hệ huyết thống, cùng lao động và hưởng thụ chung.',
    icon: <Tent size={40} className="text-[var(--color-accent)]" />,
    period: 'Xã hội nguyên thủy',
  },
  {
    name: 'Bộ lạc',
    desc: 'Liên minh các thị tộc, hình thành trên cơ sở hôn nhân và liên kết lãnh thổ.',
    icon: <Swords size={40} className="text-[var(--color-accent)]" />,
    period: 'Cuối nguyên thủy',
  },
  {
    name: 'Bộ tộc',
    desc: 'Cộng đồng người rộng lớn hơn, gắn với sự ra đời của nhà nước và chế độ tư hữu.',
    icon: <Castle size={40} className="text-[var(--color-accent)]" />,
    period: 'Chiếm hữu nô lệ',
  },
]

export const EUROPE_STEPS = [
  {
    icon: <Landmark size={24} />,
    label: 'Tan rã phong kiến',
    detail: 'Chế độ phong kiến suy tàn, lãnh địa cát cứ bị phá vỡ, nhường chỗ cho nền kinh tế hàng hóa phát triển mạnh mẽ.'
  },
  {
    icon: <FactoryIcon size={24} />,
    label: 'Kinh tế tư bản',
    detail: 'Chủ nghĩa tư bản ra đời đòi hỏi một thị trường thống nhất rộng lớn, xóa bỏ thuế quan nội địa.'
  },
  {
    icon: <Building size={24} />,
    label: 'Dân tộc tư sản',
    detail: 'Giai cấp tư sản lãnh đạo thống nhất quốc gia, hình thành "nhà nước dân tộc" đại diện cho lợi ích tư sản.'
  }
]

export const VIETNAM_STEPS = [
  {
    icon: <Map size={24} />,
    label: 'Nhu cầu trị thủy',
    detail: 'Nền văn minh lúa nước đòi hỏi sự liên kết chặt chẽ để đắp đê, chống thiên tai, hình thành cố kết cộng đồng sớm.'
  },
  {
    icon: <Mountain size={24} />,
    label: 'Chống ngoại xâm',
    detail: 'Hàng nghìn năm đấu tranh chống các thế lực bành trướng tạo nên ý thức độc lập tự cường mãnh liệt.'
  },
  {
    icon: <HeartHandshake size={24} />,
    label: 'Dân tộc văn hóa',
    detail: 'Dân tộc hình thành trước CNTB, gắn liền với bảo vệ bản sắc, tiếng nói, phong tục và lãnh thổ thiêng liêng.'
  }
]

export const DIALECTIC_NODES = [
  {
    id: 'class',
    title: 'Giai cấp',
    icon: <Users size={32} />,
    color: '#e4c36a', // Gold
    desc: 'Có trước dân tộc hàng nghìn năm. Trong xã hội có giai cấp, giai cấp thống trị quyết định tính chất của dân tộc.'
  },
  {
    id: 'nation',
    title: 'Dân tộc',
    icon: <Flag size={32} />,
    color: '#e07070', // Red
    desc: 'Ở các nước thuộc địa, đấu tranh giải phóng dân tộc là điều kiện tiên quyết để giải phóng giai cấp.'
  },
  {
    id: 'humanity',
    title: 'Nhân loại',
    icon: <Globe size={32} />,
    color: '#7cb3f7', // Blue
    desc: 'Lợi ích nhân loại không trừu tượng, mà thống nhất với lợi ích giai cấp khi giai cấp đó đại diện cho sự tiến bộ.'
  }
]

export const VIETNAM_BRANCHES = [
  {
    icon: <Target size={32} className="text-[var(--color-vn-bright)]" />,
    title: 'Mục tiêu & Đặc điểm',
    preview: 'Bỏ qua chế độ Tư bản chủ nghĩa...',
    detail: 'Quá độ lên CNXH ở Việt Nam là sự phát triển "bỏ qua chế độ tư bản chủ nghĩa". Do xuất phát điểm thấp và tồn tại nhiều thành phần kinh tế, trong xã hội vẫn còn sự phân hóa lợi ích và đấu tranh chống áp bức, bất công.',
  },
  {
    icon: <Shield size={32} className="text-[var(--color-vn-bright)]" />,
    title: 'Bảo vệ Nền tảng',
    preview: 'Đấu tranh trên mặt trận tư tưởng...',
    detail: 'Đấu tranh phản bác các quan điểm sai trái, thù địch; bảo vệ nền tảng tư tưởng của Đảng. Đây là hình thức đấu tranh giai cấp gay gắt, phức tạp trong bối cảnh không gian mạng hiện nay.',
  },
  {
    icon: <LineChart size={32} className="text-[var(--color-vn-bright)]" />,
    title: 'Công nghiệp hoá',
    preview: 'Phát triển lực lượng sản xuất...',
    detail: 'Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với kinh tế tri thức. Sự phát triển vượt bậc của lực lượng sản xuất là chìa khóa giải quyết triệt để mâu thuẫn giai cấp từ gốc rễ kinh tế.',
  },
  {
    icon: <BookOpen size={32} className="text-[var(--color-vn-bright)]" />,
    title: 'Giáo dục & Pháp quyền',
    preview: 'Xây dựng nhà nước pháp quyền...',
    detail: 'Hoàn thiện nhà nước pháp quyền XHCN, nơi pháp luật bảo vệ quyền lợi chính đáng của nhân dân lao động; dùng giáo dục kết hợp hành chính để ngăn chặn vi phạm pháp luật và suy thoái đạo đức.',
  },
  {
    icon: <Handshake size={32} className="text-[var(--color-vn-bright)]" />,
    title: 'Khối Liên minh',
    preview: 'Công nhân - Nông dân - Trí thức...',
    detail: 'Củng cố khối liên minh vững chắc giữa giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức. Đây là lực lượng nòng cốt tạo nên sức mạnh đại đoàn kết toàn dân tộc.',
  },
  {
    icon: <Globe size={32} className="text-[var(--color-vn-bright)]" />,
    title: 'Hội nhập tự chủ',
    preview: 'Kết hợp sức mạnh dân tộc và thời đại...',
    detail: 'Chủ động hội nhập quốc tế sâu rộng nhưng giữ vững độc lập tự chủ. Đấu tranh giai cấp và dân tộc hiện nay bao hàm cả việc bảo vệ lợi ích quốc gia trên trường quốc tế.',
  },
]

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Dấu hiệu chủ yếu quy định địa vị kinh tế - xã hội của các giai cấp là gì?",
    options: [
      { id: "A", text: "Sự khác nhau về trình độ học vấn và nhận thức." },
      { id: "B", text: "Các mối quan hệ kinh tế - vật chất giữa các tập đoàn người trong phương thức sản xuất." },
      { id: "C", text: "Sự phân chia quyền lực chính trị trong bộ máy nhà nước." },
      { id: "D", text: "Sự khác biệt về phong tục, tập quán và văn hóa." }
    ],
    correctAnswer: "B"
  },
  {
    id: 2,
    question: "Theo quan điểm của chủ nghĩa duy vật lịch sử, thực chất của quan hệ giai cấp là gì?",
    options: [
      { id: "A", text: "Quan hệ hợp tác và phân công lao động xã hội." },
      { id: "B", text: "Quan hệ bình đẳng giữa các tập đoàn người trong xã hội." },
      { id: "C", text: "Quan hệ giữa bóc lột và bị bóc lột." },
      { id: "D", text: "Quan hệ cạnh tranh tự do trong sản xuất." }
    ],
    correctAnswer: "C"
  },
  {
    id: 3,
    question: "Nguồn gốc trực tiếp của sự phân hóa giai cấp trong xã hội là do đâu?",
    options: [
      { id: "A", text: "Sự xuất hiện của các hình thức tôn giáo." },
      { id: "B", text: "Sự ra đời và tồn tại của chế độ chiếm hữu tư nhân về tư liệu sản xuất." },
      { id: "C", text: "Sự hình thành của nhà nước và pháp luật." },
      { id: "D", text: "Các cuộc chiến tranh giành lãnh thổ." }
    ],
    correctAnswer: "B"
  },
  {
    id: 4,
    question: "Nguồn gốc sâu xa của sự phân hóa giai cấp là gì?",
    options: [
      { id: "A", text: "Tình trạng phát triển chưa đạt tới trình độ xã hội hóa cao của lực lượng sản xuất." },
      { id: "B", text: "Sự mâu thuẫn giữa các bộ lạc trong quá trình sinh tồn." },
      { id: "C", text: "Sự gia tăng dân số quá nhanh trong các cộng đồng người." },
      { id: "D", text: "Do ý muốn chủ quan của giai cấp thống trị." }
    ],
    correctAnswer: "A"
  },
  {
    id: 5,
    question: "Kết cấu của một xã hội có giai cấp bao gồm những bộ phận nào?",
    options: [
      { id: "A", text: "Giai cấp thống trị và giai cấp bị trị." },
      { id: "B", text: "Giai cấp công nhân, nông dân và tầng lớp trí thức." },
      { id: "C", text: "Giai cấp cơ bản và giai cấp không cơ bản." },
      { id: "D", text: "Giai cấp cơ bản, giai cấp không cơ bản và tầng lớp trung gian." }
    ],
    correctAnswer: "D"
  },
  {
    id: 6,
    question: "Vì sao đấu tranh giai cấp là một tất yếu trong các xã hội có giai cấp?",
    options: [
      { id: "A", text: "Do sự cạnh tranh kinh tế trên thị trường tự do." },
      { id: "B", text: "Do sự xúi giục của các thế lực bên ngoài lãnh thổ." },
      { id: "C", text: "Do sự đối lập về lợi ích căn bản không thể điều hòa được giữa các giai cấp." },
      { id: "D", text: "Do sự khác biệt về ý thức hệ tôn giáo." }
    ],
    correctAnswer: "C"
  },
  {
    id: 7,
    question: "Nội dung mới của đấu tranh giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội hiện nay là gì?",
    options: [
      { id: "A", text: "Tiến hành bạo lực cách mạng để lật đổ chính quyền tư sản." },
      { id: "B", text: "Xóa bỏ hoàn toàn nền kinh tế thị trường, thiết lập kinh tế bao cấp." },
      { id: "C", text: "Thực hiện thắng lợi sự nghiệp công nghiệp hoá, hiện đại hoá theo định hướng xã hội chủ nghĩa." },
      { id: "D", text: "Tập trung vào đấu tranh vũ trang chống lại các thế lực thù địch." }
    ],
    correctAnswer: "C"
  },
  {
    id: 8,
    question: "Hình thức đấu tranh giai cấp ở Việt Nam hiện nay có đặc điểm như thế nào?",
    options: [
      { id: "A", text: "Đa dạng, phong phú, kết hợp các hình thức, biện pháp linh hoạt (hành chính, giáo dục, kinh tế...)." },
      { id: "B", text: "Chỉ sử dụng các hình thức đấu tranh hòa bình, không dùng đến pháp luật." },
      { id: "C", text: "Chủ yếu là đấu tranh bằng bạo lực cách mạng." },
      { id: "D", text: "Đấu tranh thuần túy trên mặt trận tư tưởng - văn hóa." }
    ],
    correctAnswer: "A"
  },
  {
    id: 9,
    question: "Trình tự xuất hiện của các hình thức cộng đồng người trước khi hình thành dân tộc là gì?",
    options: [
      { id: "A", text: "Thị tộc -> Bộ tộc -> Bộ lạc." },
      { id: "B", text: "Bộ lạc -> Thị tộc -> Bộ tộc." },
      { id: "C", text: "Thị tộc -> Bộ lạc -> Bộ tộc." },
      { id: "D", text: "Bộ tộc -> Bộ lạc -> Thị tộc." }
    ],
    correctAnswer: "C"
  },
  {
    id: 10,
    question: "Đặc điểm cơ bản của \"Thị tộc\" - hình thức cộng đồng người sớm nhất là gì?",
    options: [
      { id: "A", text: "Hình thành không theo huyết thống." },
      { id: "B", text: "Có lãnh thổ riêng và một bộ máy nhà nước độc lập." },
      { id: "C", text: "Xã hội đã phân chia thành giai cấp và có tư hữu." },
      { id: "D", text: "Có tên gọi riêng, cùng một tổ tiên và cùng tiếng nói." }
    ],
    correctAnswer: "D"
  },
  {
    id: 11,
    question: "Bộ tộc là hình thức cộng đồng người được hình thành trong điều kiện lịch sử nào?",
    options: [
      { id: "A", text: "Khi xã hội có sự phân chia thành giai cấp." },
      { id: "B", text: "Khi con người bắt đầu biết sử dụng công cụ bằng đá." },
      { id: "C", text: "Khi chủ nghĩa tư bản ra đời và phát triển mạnh." },
      { id: "D", text: "Khi nhà nước vô sản đầu tiên được thành lập." }
    ],
    correctAnswer: "A"
  },
  {
    id: 12,
    question: "Đâu KHÔNG PHẢI là một trong các đặc trưng cơ bản của Dân tộc?",
    options: [
      { id: "A", text: "Là một cộng đồng người ổn định trên một lãnh thổ thống nhất." },
      { id: "B", text: "Là một cộng đồng thống nhất về kinh tế và ngôn ngữ." },
      { id: "C", text: "Là một cộng đồng được hình thành dựa trên cùng một quan hệ huyết thống." },
      { id: "D", text: "Là một cộng đồng bền vững về văn hóa và tâm lý, tính cách." }
    ],
    correctAnswer: "C"
  },
  {
    id: 13,
    question: "Ở châu Âu, sự hình thành dân tộc gắn liền với bối cảnh lịch sử nào?",
    options: [
      { id: "A", text: "Sự tan rã của xã hội cộng sản nguyên thủy." },
      { id: "B", text: "Sự ra đời của chủ nghĩa tư bản." },
      { id: "C", text: "Quá trình đấu tranh chống thực dân xâm lược." },
      { id: "D", text: "Sự xuất hiện của chủ nghĩa xã hội." }
    ],
    correctAnswer: "B"
  },
  {
    id: 14,
    question: "Đặc thù quá trình hình thành dân tộc của Việt Nam có sự khác biệt gì so với châu Âu?",
    options: [
      { id: "A", text: "Dân tộc ra đời muộn, gắn liền với các cuộc cách mạng tư sản." },
      { id: "B", text: "Dân tộc ra đời rất sớm, gắn liền với quá trình đấu tranh chống ngoại xâm và bảo vệ nền văn hóa." },
      { id: "C", text: "Dân tộc ra đời do sự hợp nhất của các bộ tộc phương Tây." },
      { id: "D", text: "Dân tộc chỉ thực sự hình thành khi hoàn thành công nghiệp hóa." }
    ],
    correctAnswer: "B"
  },
  {
    id: 15,
    question: "Xét về mặt lịch sử, mối quan hệ về sự ra đời giữa giai cấp và dân tộc diễn ra như thế nào?",
    options: [
      { id: "A", text: "Giai cấp có trước dân tộc hàng nghìn năm." },
      { id: "B", text: "Dân tộc có trước giai cấp hàng nghìn năm." },
      { id: "C", text: "Giai cấp và dân tộc ra đời cùng một lúc vào thời kỳ cận đại." },
      { id: "D", text: "Dân tộc và nhân loại ra đời trước giai cấp." }
    ],
    correctAnswer: "A"
  },
  {
    id: 16,
    question: "Trong mối quan hệ biện chứng giữa giai cấp và dân tộc, yếu tố nào đóng vai trò quyết định?",
    options: [
      { id: "A", text: "Dân tộc quyết định sự ra đời của giai cấp." },
      { id: "B", text: "Giai cấp quyết định khuynh hướng phát triển và tính chất của dân tộc." },
      { id: "C", text: "Cả hai yếu tố tác động ngang bằng và không có yếu tố quyết định." },
      { id: "D", text: "Nhà nước quyết định cả dân tộc và giai cấp." }
    ],
    correctAnswer: "B"
  },
  {
    id: 17,
    question: "Trong thời đại ngày nay, mối quan hệ giữa đấu tranh giải phóng dân tộc và đấu tranh giải phóng giai cấp là gì?",
    options: [
      { id: "A", text: "Đấu tranh giải phóng dân tộc cản trở cuộc đấu tranh giải phóng giai cấp." },
      { id: "B", text: "Đấu tranh giải phóng dân tộc là điều kiện, tiền đề cho đấu tranh giải phóng giai cấp." },
      { id: "C", text: "Hai cuộc đấu tranh này diễn ra song song và không liên quan đến nhau." },
      { id: "D", text: "Phải hoàn thành giải phóng giai cấp rồi mới giải phóng dân tộc." }
    ],
    correctAnswer: "B"
  },
  {
    id: 18,
    question: "Theo triết học Mác - Lênin, \"Nhân loại\" được hiểu là gì?",
    options: [
      { id: "A", text: "Là những người có cùng trình độ văn hóa tiến bộ." },
      { id: "B", text: "Là toàn thể cộng đồng người sống trên trái đất." },
      { id: "C", text: "Là tập hợp các quốc gia, dân tộc đã phát triển." },
      { id: "D", text: "Là khối liên minh giữa các dân tộc thuộc thế giới thứ ba." }
    ],
    correctAnswer: "B"
  },
  {
    id: 19,
    question: "Trong một xã hội có giai cấp, lợi ích nhân loại có đặc điểm gì?",
    options: [
      { id: "A", text: "Tồn tại độc lập, hoàn toàn tách biệt với lợi ích giai cấp." },
      { id: "B", text: "Cao hơn và làm lu mờ mọi lợi ích dân tộc." },
      { id: "C", text: "Không tách rời và bị chi phối bởi lợi ích giai cấp, lợi ích dân tộc." },
      { id: "D", text: "Chỉ phục vụ cho mục đích bảo vệ môi trường toàn cầu." }
    ],
    correctAnswer: "C"
  },
  {
    id: 20,
    question: "Đâu là cơ sở tạo nên tính thống nhất toàn nhân loại?",
    options: [
      { id: "A", text: "Bản chất xã hội của con người." },
      { id: "B", text: "Quá trình toàn cầu hóa kinh tế và công nghệ." },
      { id: "C", text: "Sự thống nhất về ngôn ngữ trên toàn thế giới." },
      { id: "D", text: "Hệ thống luật pháp quốc tế chung." }
    ],
    correctAnswer: "A"
  }
];

export const FLASHCARD_DATA = [
  { id: 1, category: 'class', front: 'Khái niệm "Giai cấp" theo Lênin', back: 'Là những tập đoàn người to lớn có địa vị kinh tế - xã hội khác nhau (khác nhau về sở hữu, quản lý và phân phối của cải).' },
  { id: 2, category: 'class', front: 'Dấu hiệu cơ bản nhất để phân biệt các giai cấp', back: 'Mối quan hệ đối với tư liệu sản xuất (ai nắm giữ tư liệu sản xuất sẽ là giai cấp thống trị).' },
  { id: 3, category: 'class', front: 'Bản chất sâu xa của quan hệ giai cấp', back: 'Là quan hệ bóc lột, trong đó tập đoàn người này chiếm đoạt lao động của tập đoàn người khác.' },
  { id: 4, category: 'class', front: 'Nguồn gốc sâu xa của phân hóa giai cấp', back: 'Do tình trạng phát triển chưa đạt tới trình độ xã hội hóa cao của lực lượng sản xuất.' },
  { id: 5, category: 'class', front: 'Nguồn gốc trực tiếp của phân hóa giai cấp', back: 'Sự ra đời và tồn tại của chế độ chiếm hữu tư nhân về tư liệu sản xuất.' },
  { id: 6, category: 'class', front: 'Kết cấu của một xã hội có giai cấp', back: 'Gồm giai cấp cơ bản (sinh ra từ PTSX thống trị), giai cấp không cơ bản (tàn dư PTSX cũ/mầm mống PTSX mới) và tầng lớp trung gian.' },
  { id: 7, category: 'class', front: 'Đấu tranh giai cấp là gì?', back: 'Là cuộc đấu tranh của các tập đoàn người có lợi ích căn bản đối lập nhau không thể điều hòa được.' },
  { id: 8, category: 'class', front: 'Nội dung đấu tranh giai cấp ở Việt Nam hiện nay', back: 'Thực hiện thắng lợi sự nghiệp CNH-HĐH, chống lại các thế lực thù địch, bảo vệ độc lập dân tộc và CNXH.' },
  { id: 9, category: 'nation', front: 'Các hình thức cộng đồng người trước dân tộc', back: 'Thị tộc → Bộ lạc → Bộ tộc.' },
  { id: 10, category: 'nation', front: 'Đặc trưng của Thị tộc', back: 'Hình thức cộng đồng người sớm nhất, cùng chung huyết thống, cùng tiếng nói và tên gọi riêng.' },
  { id: 11, category: 'nation', front: 'Điều kiện hình thành Bộ tộc', back: 'Hình thành khi xã hội bắt đầu có sự phân chia giai cấp (thời kỳ cổ đại và phong kiến).' },
  { id: 12, category: 'nation', front: 'Đặc trưng cơ bản của Dân tộc', back: 'Cộng đồng ổn định về lãnh thổ, thống nhất về kinh tế, chung ngôn ngữ, và bền vững về văn hóa/tâm lý.' },
  { id: 13, category: 'nation', front: 'Sự hình thành dân tộc ở Châu Âu', back: 'Gắn liền với sự tan rã của phong kiến và sự ra đời của Chủ nghĩa tư bản, cùng với thị trường thống nhất.' },
  { id: 14, category: 'nation', front: 'Sự hình thành dân tộc ở Việt Nam', back: 'Ra đời từ rất sớm, gắn liền với nhu cầu trị thủy, cố kết cộng đồng và đấu tranh chống ngoại xâm.' },
  { id: 15, category: 'dialectic', front: 'Quan hệ nguồn gốc giữa Giai cấp và Dân tộc', back: 'Giai cấp xuất hiện trước dân tộc hàng nghìn năm. Sự phân hóa giai cấp dẫn đến sự tan rã của bộ tộc, hình thành dân tộc.' },
  { id: 16, category: 'dialectic', front: 'Giai cấp quyết định Dân tộc như thế nào?', back: 'Giai cấp thống trị nắm phương thức sản xuất sẽ quyết định tính chất, xu hướng phát triển và lợi ích của toàn dân tộc.' },
  { id: 17, category: 'dialectic', front: 'Dân tộc tác động lại Giai cấp', back: 'Đấu tranh giải phóng dân tộc là tiền đề và điều kiện tiên quyết để giải phóng giai cấp (đặc biệt ở các nước thuộc địa).' },
  { id: 18, category: 'dialectic', front: 'Khái niệm "Nhân loại"', back: 'Là toàn thể cộng đồng người sống trên trái đất, có bản chất xã hội chung.' },
  { id: 19, category: 'dialectic', front: 'Lợi ích nhân loại và Lợi ích giai cấp', back: 'Lợi ích nhân loại không tách rời mà luôn bị chi phối bởi lợi ích giai cấp và dân tộc. Giai cấp tiến bộ sẽ đại diện cho lợi ích nhân loại.' },
  { id: 20, category: 'dialectic', front: 'Mục tiêu cao nhất của chủ nghĩa Mác-Lênin', back: 'Giải phóng dân tộc, giải phóng giai cấp và tiến tới giải phóng hoàn toàn con người (nhân loại) khỏi ách áp bức.' },
];
