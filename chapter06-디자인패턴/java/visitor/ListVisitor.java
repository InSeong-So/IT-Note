package java.visitor;

import java.util.Iterator;

public class ListVisitor extends Visitor {

	private String currentdir = "";

	public void visit(File file) {
		System.out.println(currentdir + "/" + file);
	}

	public void visit(Directory directory) {
		System.out.println(currentdir + "/" + directory);
		String savedir = currentdir;
		currentdir = currentdir + "/" + directory.iterator();
		Iterator it = directory.iterator();
		while (it.hasNext()) {
			Entry entry = (Entry) it.next();
			entry.accept(this);
		}
		currentdir = savedir;
	}
}
