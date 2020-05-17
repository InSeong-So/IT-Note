package java.facade;

import java.io.IOException;
import java.io.Writer;

public class HtmlWriter {

	private Writer writer;

	public HtmlWriter(Writer writer) {
		this.writer = writer;
	}

	public void title(String title) throws IOException {
		writer.write("<html>");
		writer.write("<head>");
		writer.write("<title>" + title + "</title>");
		writer.write("</head>");
		writer.write("<body>\n");
		writer.write("<h1>" + title + "</h1>\n");
	}

	public void paragraph(String msg) throws IOException {
		writer.write("<p>" + msg + "</p>\n");
	}

	public void link(String href, String caption) throws IOException {
		paragraph("<a href=\'" + href + "\'>" + caption + "</a>");
	}

	public void mailto(String mailaddr, String username) throws IOException {
		link("mailto: " + mailaddr, username);
	}

	public void close() throws IOException {
		writer.write("</body>");
		writer.write("</html>\n");
		writer.close();
	}
}
