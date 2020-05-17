package java.adapter.instanceEx;

public class PrintBanner extends Print {

	private Banner banner;

	public PrintBanner(String string) {
		this.banner = new Banner(string);
	}

	@Override
	public void printWeak() {
		banner.showWithparen();
	}

	@Override
	public void printStrong() {
		banner.showWithAster();
	}
}
