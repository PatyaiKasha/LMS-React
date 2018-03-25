export default [
{
    contentTitle: "DOM (Document Object Model)",
    contentText: "DOM (Document Object Model) - это межплатформенный и независимый от языка интерф" +
            "ейс прикладного программирования, и может использоваться с любым языком программ" +
            "ирования. DOM обрабатывает HTML, XHTML или XML-документ как древовидную структур" +
            "у, в которой каждый узел является объектом, который имеет свойства и методы, пре" +
            "дставляющим часть документа. Объекты могут управляться программно, и любые видим" +
            "ые изменения, происходящие в результате, могут затем отражаться в отображении до" +
            "кумента. По существу DOM соединяет веб-страницу с языками программирования. Сам " +
            "по себе язык JavaScript не предусматривает работы с браузером. Он вообще не знае" +
            "т про HTML. Каждый элемент в документе - весь документ в целом, заголовок, табли" +
            "цы внутри документа, заголовки таблицы, текст внутри ячеек таблицы - это части D" +
            "OM для этого документа, поэтому все они доступны и могут изменяться с помощью DO" +
            "M и JavaScript. создании сценария с использованием элемента script, либо включая" +
            " в веб страницу инструкцию для загрузки скрипта вы можете немедленно приступить " +
            "к использованию программного интерфейса (API), используя элементы document или w" +
            "indow для взаимодействия с самим документом, либо для получения потомков этого д" +
            "окумента, т.е. различных элементов на странице."
}, {
    contentTitle: "HTML документ и DOM",
    contentText: "Согласно DOM-модели, документ является иерархией. Каждый HTML-тег образует отдел" +
            "ьный элемент-узел, каждый фрагмент текста - текстовый элемент. Проще говоря, HTM" +
            "L-документ представляет собой иерархическое дерево. Это означает, что у каждого " +
            "элемента (кроме корневого) есть только один родитель, т.е. элемент, внутри котор" +
            "ого он располагается. У корневого раздела родитель отсутствует. Это дерево образ" +
            "уется за счет вложенной структуры тегов и текстовых элементов, каждый из которых" +
            " образует отдельный узел."
}, {
    contentTitle: "CSSOM",
    contentText: "Стили CSS, преобразуются в CSSOM - объектную модель CSS. Это похоже на DOM, но д" +
            "ля CSS. В отличие от DOM, он не может быть построен постепенно. Поскольку правил" +
            "а CSS могут переопределять друг друга, движок браузера должен выполнять сложные " +
            "вычисления, чтобы выяснить, как код CSS применяется к DOM."
}, {
    contentTitle: "Процесс построения веб-страницы",
    contentText: "Почему построение DOM приостановилось? Скрипты могут изменять как HTML, так и ег" +
            "о продукт - DOM, добавляя узлы. Скрипты могут также запрашивать что-то о DOM, и " +
            "если это происходит, когда DOM все еще строится, он может вернуть неожиданные ре" +
            "зультаты. JavaScript блокирует построение DOM, поскольку он может модифицировать" +
            " документ. CSS не может изменить документ, поэтому кажется, что нет причин для е" +
            "го блокировки, правильно? Из-за этого CSS может блокировать разбор HTML в зависи" +
            "мости от порядка внешних таблиц стилей и сценариев в документе. Если перед скрип" +
            "тами в документе есть внешние таблицы стилей, конструкция объектов DOM и CSSOM м" +
            "ожет мешать друг другу. Когда синтаксический анализатор попадает в тег сценария," +
            " конструкция DOM не может продолжаться до тех пор, пока JavaScript не завершит в" +
            "ыполнение, и JavaScript не будет выполнен до тех пор, пока CSS не будет загружен" +
            ", проанализирован и не будет доступен CSSOM. Еще одна вещь, о которой следует по" +
            "мнить, заключается в том, что даже если CSS не блокирует конструкцию DOM, он бло" +
            "кирует рендеринг. Браузер ничего не отобразит, пока не будет DOM и CSSOM. Это св" +
            "язано с тем, что страницы без CSS часто непригодны для использования. Если брауз" +
            "ер показал вам беспорядочную страницу без CSS, а через несколько мгновений показ" +
            "ал стилизованную страницу, внезапные смещения содержимого и визуальные изменения" +
            " плохо влияют на user experience."
}, {
    contentTitle: "Атрибуты defer и async",
    contentText: "Синхронные скрипты блокирующие парсер, это проблема. И не все сценарии одинаково" +
            " важны для пользователей, например, для отслеживания и аналитики. Решение? Асинх" +
            "ронная загрузка этих менее важных сценариев. Атрибуты defer и async были введены" +
            ", чтобы дать разработчикам возможность указать браузеру, какие скрипты обрабатыв" +
            "ать асинхронно. Оба этих атрибута сообщают браузеру, что он может продолжить пар" +
            "синг HTML при загрузке сценария «в фоновом режиме», а затем выполнить скрипт пос" +
            "ле его загрузки. Таким образом, загрузка скриптов не блокирует построение DOM и " +
            "рендеринг страниц. В результате пользователь может видеть страницу до того, как " +
            "все сценарии завершили загрузку. Разница между ними - это тот момент, когда загр" +
            "уженые скрипты начинают выполняться. Выполнение defer скриптов начинается после " +
            "завершения парсинга, но перед событием DOMContentLoaded. Это гарантирует, что ск" +
            "рипты будут выполняться в том порядке, в котором они отображаются в HTML, и не б" +
            "удут блокировать синтаксический анализатор."
}, {
    contentTitle: "Атрибут preload",
    contentText: "async и defer отлично подходят, если вы хотите отложить обработку некоторых скри" +
            "птов, но как быть с контентом который важен для пользователя? Общая цель состоит" +
            " в том, чтобы сначала предоставить CSS, поскольку он блокирует рендеринг. Синхро" +
            "нные скрипты всегда будут иметь более высокий приоритет, чем асинхронный. Изобра" +
            "жения, видимые в первоначальной области окна просмотра, должны быть загружены до" +
            " тех, что находятся ниже видимого контента. А есть также шрифты, видеоролики, SV" +
            "G ... В общем - это сложно.Вы как разработчик, знаете какие ресурсы являются наи" +
            "более важными для рендеринга страницы. Некоторые из них часто находятся в CSS ил" +
            "и скриптах, и это может занять у браузера некоторое время, прежде чем он их даже" +
            " обнаружит. Для этих важных ресурсов вы можете использовать <link rel=preload> д" +
            "ля того чтобы сообщить браузеру о том, что вы хотите загрузить эти ресурсы как м" +
            "ожно быстрее."
}, {
    contentTitle: "Атрибут xxx",
    contentText: "async и defer отлично подходят, если вы хотите отложить обработку некоторых скри" +
            "птов, но как быть с контентом который важен для пользователя? Общая цель состоит" +
            " в том, чтобы сначала предоставить CSS, поскольку он блокирует рендеринг. Синхро" +
            "нные скрипты всегда будут иметь более высокий приоритет, чем асинхронный. Изобра" +
            "жения, видимые в первоначальной области окна просмотра, должны быть загружены до" +
            " тех, что находятся ниже видимого контента. А есть также шрифты, видеоролики, SV" +
            "G ... В общем - это сложно.Вы как разработчик, знаете какие ресурсы являются наи" +
            "более важными для рендеринга страницы. Некоторые из них часто находятся в CSS ил" +
            "и скриптах, и это может занять у браузера некоторое время, прежде чем он их даже" +
            " обнаружит. Для этих важных ресурсов вы можете использовать <link rel=preload> д" +
            "ля того чтобы сообщить браузеру о том, что вы хотите загрузить эти ресурсы как м" +
            "ожно быстрее."
}
];