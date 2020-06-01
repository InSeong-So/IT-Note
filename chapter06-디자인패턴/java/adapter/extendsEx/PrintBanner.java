package java.adapter.extendsEx;

public class PrintBanner extends Banner implements Print {

	public PrintBanner(String string) {
		super(string);
	}

	@Override
	public void printWeak() {
		showWithparen();
	}

	@Override
	public void printStrong() {
		showWithAster();
	}

}
