package java.flyweight;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BigChar {

	private char charname;

	private String fontdata;

	public BigChar(char charname) {
		this.charname = charname;

		try {
			BufferedReader reader = new BufferedReader(new FileReader("big" + charname + ".txt"));
			String line;
			StringBuffer buf = new StringBuffer();
			while ((line = reader.readLine()) != null) {
				buf.append(line);
				buf.append("\n");
			}
			reader.close();
			this.fontdata = buf.toString();
		} catch (IOException e) {
			this.fontdata = charname + "?";
		}
	}

	public void print() {
		System.out.println(fontdata);
	}
}
