import { Component, OnInit } from '@angular/core';

interface TopicModel {
    key: string
    value: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'angular-japanese-learn';
    topics: TopicModel[] = [];
    grammar: any = {};
  
    ngOnInit(): void {
        this.topics = this.getRandomTopics(3);
        this.grammar = this.getRandomGrammar();
      console.log(this.grammar);
    }

    getRandomTopics(count: number): TopicModel[] {
        const shuffled = this.vnTopics.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    getRandomGrammar() {
        const shuffled = this.grammars.sort(() => Math.random() - 0.5);
        return  shuffled.slice(0, 1);
    }

    vnTopics = [
        { "key": "football", "value": "Bóng đá" },
        { "key": "cooking", "value": "Nấu ăn" },
        { "key": "gardening", "value": "Làm vườn" },
        { "key": "yoga", "value": "Yoga" },
        { "key": "reading", "value": "Đọc sách" },
        { "key": "art", "value": "Nghệ thuật" },
        { "key": "music", "value": "Âm nhạc" },
        { "key": "movies", "value": "Xem phim" },
        { "key": "technology", "value": "Công nghệ" },
        { "key": "science", "value": "Khoa học" },
        { "key": "history", "value": "Lịch sử" },
        { "key": "literature", "value": "Văn học" },
        { "key": "philosophy", "value": "Triết học" },
        { "key": "poetry", "value": "Thơ" },
        { "key": "fashion", "value": "Thời trang" },
        { "key": "architecture", "value": "Kiến trúc" },
        { "key": "photography", "value": "Nhiếp ảnh" },
        { "key": "travel", "value": "Du lịch" },
        { "key": "fitness", "value": "Thể dục" },
        { "key": "meditation", "value": "Thiền" },
        { "key": "astrology", "value": "Chiêm tinh" },
        { "key": "comics", "value": "Truyện tranh" },
        { "key": "gaming", "value": "Chơi game" },
        { "key": "dance", "value": "Khiêu vũ" },
        { "key": "theater", "value": "Nhà hát" },
        { "key": "cycling", "value": "Đạp xe" },
        { "key": "swimming", "value": "Bơi lội" },
        { "key": "hiking", "value": "Đi bộ đường dài" },
        { "key": "bird watching", "value": "Quan sát chim" },
        { "key": "fishing", "value": "Câu cá" },
        { "key": "diy projects", "value": "Dự án tự làm" },
        { "key": "crafting", "value": "Thủ công" },
        { "key": "painting", "value": "Hội họa" },
        { "key": "drawing", "value": "Vẽ" },
        { "key": "sculpture", "value": "Điêu khắc" },
        { "key": "pottery", "value": "Gốm" },
        { "key": "knitting", "value": "Đan" },
        { "key": "sewing", "value": "May" },
        { "key": "quilting", "value": "Quilt" },
        { "key": "baking", "value": "Nướng bánh" },
        { "key": "brewing", "value": "Pha chế" },
        { "key": "wine tasting", "value": "Nếm rượu" },
        { "key": "cheese making", "value": "Làm phô mai" },
        { "key": "environmental conservation", "value": "Bảo tồn môi trường" },
        { "key": "renewable energy", "value": "Năng lượng tái tạo" },
        { "key": "robotics", "value": "Robot" },
        { "key": "space exploration", "value": "Khám phá không gian" },
        { "key": "virtual reality", "value": "Thực tế ảo" },
        { "key": "blockchain", "value": "Blockchain" },
        { "key": "artificial intelligence", "value": "Trí tuệ nhân tạo" }
    ];

    grammars = [{"key":"1. ～ことにしています"},{"key":"2. ～ことになっています"},{"key":"3. ～ようになっている"},{"key":"4. ～ような／ように"},{"key":"5. ～みたいだ"},{"key":"6. ～らしい"},{"key":"7. ～つもり"},{"key":"8. ～てくる"},{"key":"9. ～てほしい／もらいたい"},{"key":"10. ～ば／たら／と・・・たい／のに／よかった　など"},{"key":"11. 使役形を使った表現 - Sử dụng thể sai khiến"},{"key":"12. 自動詞を使った表現 - Sử dụng tự động từ"},{"key":"13. ～み"},{"key":"14. のではないだろうか／ないかと思う"},{"key":"15. 縮約形 - Dạng rút gọn"},{"key":"16. ～から～にかけて"},{"key":"17. ～だらけ"},{"key":"18. ～おかげ"},{"key":"19. ～せい"},{"key":"20. ～とおり（に）／どおり（に）"},{"key":"21. ～について／つき"},{"key":"22. ～に関し（て）"},{"key":"23. ～に比べ（て）"},{"key":"24. ～に加え（て）"},{"key":"25. ～に対し（て）"},{"key":"26. ～たびに"},{"key":"27. たとえ～ても"},{"key":"28. ～って"},{"key":"29. ～くらい／ぐらい"},{"key":"30. ～くらいなら／ぐらいなら"},{"key":"31. ～うちに"},{"key":"32. ～を中心に／を中心として／を中心にして"},{"key":"33. ～をはじめ"},{"key":"34. ～に対し（て）"},{"key":"35. ～において"},{"key":"36. ～にわたって／わたり"},{"key":"37. ～にとって"},{"key":"38. ～による／より／よって／よっては"},{"key":"39. ～に違いない"},{"key":"40. ～とは／というのは"},{"key":"41. ～たとたん（に）"},{"key":"42. ～につれ（て）"},{"key":"43. にしたがって／したがい"},{"key":"44. ～最中"},{"key":"45. ～てからでないと／なければ・・・ない"},{"key":"46. ～て以来"},{"key":"47. ～一方だ"},{"key":"48. ～しかない／ほかない／よりない／よりほかない／ほかしかたがない"},{"key":"49. はもちろん／もとより"},{"key":"50. ～ついでに"},{"key":"51. ～ということだ"},{"key":"52. ～ことはない"},{"key":"53. こと"},{"key":"54. ～ないことはない／もない"},{"key":"55. ～もの　（もん）"},{"key":"56. ～ものだから／もので"},{"key":"57. ～ものか"},{"key":"58. ～たところ"},{"key":"59. ～ところに／へ／を／で"},{"key":"60. ～ところだった"},{"key":"61. ～ほど"},{"key":"62. ～ば～ほど"},{"key":"63. ～ほど"},{"key":"64. など／なんか／なんて (なんか, なんて dùng trong văn nói)"},{"key":"65. ～などと（なんて）言う／思う　など"},{"key":"66. ～からには"},{"key":"67. きる"},{"key":"68. ～ぎみ"},{"key":"69. ～がち"},{"key":"70. ～向き"},{"key":"71. ～向け"},{"key":"72. ～を通じ（て）／通し（て）"},{"key":"73. ～っぱい"},{"key":"74. ～とともに"},{"key":"75. ～にともなって／ともない"},{"key":"76. ～に決まっている"},{"key":"77. ～っけ"},{"key":"78. ～ように"},{"key":"79. ～ようがない"},{"key":"80. ～はずだ"},{"key":"81. ～わけだ"},{"key":"82. ～わけがない"},{"key":"83. ～わけではない"},{"key":"84. ～わけにはいかない"},{"key":"85. ～ないわけにはいかない"},{"key":"86. ～かわり　（に）"},{"key":"87. ～にかわって／かわり"},{"key":"88. ～こそ"},{"key":"89. ～さえ"},{"key":"90. ～として"},{"key":"91. ～からといって"},{"key":"92. ～に返し　（て）"},{"key":"93. ～にもとづいて／もとづき"},{"key":"94. ～をもとに　（して）"},{"key":"95. ～反面／半面"},{"key":"96. ～れる／られる"},{"key":"97. ～てたまらない"},{"key":"98. ～てならない"},{"key":"99. ～とか"},{"key":"100. ～だけ"},{"key":"101. ～ばかりでなく"},{"key":"102. ～かけ／かける"},{"key":"103. ～をこめて"},{"key":"104. ～わりに （は）"},{"key":"105. ～くせに"},{"key":"106. ～てみせる"},{"key":"107. ～をきっかけに／にして／として"},{"key":"108. ～とする"},{"key":"109. ～際に／際（に）は"},{"key":"110. ～おそれがある"}];
}
