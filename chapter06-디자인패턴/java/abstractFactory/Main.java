package java.awt.event;

public class Main {

	public static void main(String[] args) {
		if (args.length != 1) {
			System.out.println("Usage : java Main class.name.of.ConcreateFactory");
			System.out.println("Example 1 : java Main listfactory.ListFactory");
			System.out.println("Example 2 : java Main tablefactory.TableFactory");
			System.exit(0);
		}
		Factory factory = Factory.getFactory(args[0]);

		Link joins = factory.createLink("중앙일보", "https://www.joins.com/");
		Link chosun = factory.createLink("조선일보", "https://www.chosun.com/");

		Link naver = factory.createLink("Naver", "https://www.naver.com/");
		Link google = factory.createLink("Google", "https://google.com/");

		Tray traynews = factory.createTray("신문");
		traynews.add(joins);
		traynews.add(chosun);

		Tray traynaver = factory.createTray("Naver");
		traynaver.add(naver);

		Tray traysearch = factory.createTray("검색엔진");
		traysearch.add(traynaver);
		traysearch.add(google);

		Page page = factory.createPage("LinkPage", "sis.com");
		page.add(traynews);
		page.add(traysearch);
		page.output();
	}
}
