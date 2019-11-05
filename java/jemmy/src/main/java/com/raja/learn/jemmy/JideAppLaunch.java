package com.raja.learn.jemmy;

import org.netbeans.jemmy.ClassReference;
import org.netbeans.jemmy.operators.*;

public class JideAppLaunch {
    public static void main(String[] args) throws Exception {
        // Launch jide app
        new ClassReference("JideDemos").startApplication();

        // Click on Continue button
        JFrameOperator mainFrame = new JFrameOperator("Jide Software, Inc.");
        mainFrame.close();
        mainFrame = new JFrameOperator("JIDE Products");
        JTreeOperator tree = new JTreeOperator(mainFrame);
        int row = tree.findRow("JIDE Grids");
        System.out.println("Row:" + row);
        tree.clickOnPath(tree.getPathForRow(tree.findRow("JideTable Demo")), 2);
        System.out.println("Path selected");
        JTableOperator table = new JTableOperator(mainFrame);
        table.changeCellObject(2, 2, "Setting table cell value!");
    }
}
