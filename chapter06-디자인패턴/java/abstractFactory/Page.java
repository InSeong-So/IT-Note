package java.abstractFactory;

import java.io.FileWriter;
import java.io.Writer;
import java.util.ArrayList;

public abstract class Page {

	protected String title;
	protected String author;
	protected ArrayList content = new ArrayList();

	public Page(String title, String author) {
		this.title = title;
		this.author = author;
	}

	public void add(Item item) {
		content.add(item);
	}

	public void output() {
		try {
			String filename = title + ".html";
			Writer writer = new FileWriter(filename);
			writer.write(this.makeHTML());
			writer.close();
			System.out.println(filename + " 을 작성했습니다.");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public abstract String makeHTML();
}
