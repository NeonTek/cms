const editor = grapesjs.init({
  container: "#editor",
  height: "100vh",
  width: "auto",
  blockManager: {
    appendTo: "#blocks",
    blocks: [],
  },
});

const blockManager = editor.BlockManager;

blockManager.add("button-block", {
  label: "Button",
  content:
    '<button style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px;">Button</button>',
  category: "Basic",
});

blockManager.add("title-block", {
  label: "Title",
  content: '<h1 style="font-size: 24px;">This is a Title</h1>',
  category: "Basic",
});

blockManager.add("paragraph-block", {
  label: "Paragraph",
  content:
    '<p style="font-size: 16px;">This is a paragraph. You can edit this text.</p>',
  category: "Basic",
});

blockManager.add("link-block", {
  label: "Link",
  content:
    '<a href="#" style="color: #007bff; text-decoration: none;">This is a link</a>',
  category: "Basic",
});

blockManager.add("form-block", {
  label: "Form",
  content: `
        <form style="padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name" style="margin-bottom: 10px; width: 100%; padding: 8px;"><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" style="margin-bottom: 10px; width: 100%; padding: 8px;"><br>
          <button type="submit" style="padding: 10px 20px; background-color: #28a745; color: white; border: none; border-radius: 5px;">Submit</button>
        </form>
      `,
  category: "Forms",
});

blockManager.add("icon-button-block", {
  label: "Icon Button",
  content:
    '<button style="padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;"><i class="fa fa-thumbs-up"></i> Like</button>',
  category: "Basic",
});

blockManager.add("navbar-block", {
  label: "Navbar",
  content: `
        <nav style="padding: 10px; background-color: #333; color: white; display: flex; justify-content: space-between;">
          <span>Logo</span>
          <div>
            <a href="#" style="color: white; margin-right: 10px;">Home</a>
            <a href="#" style="color: white;">About</a>
          </div>
        </nav>
      `,
  category: "Layout",
});

blockManager.add("sidebar-block", {
  label: "Sidebar",
  content: `
        <aside style="width: 200px; background-color: #f4f4f4; padding: 20px; height: 100%;">
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><a href="#" style="text-decoration: none; color: #333;">Menu Item 1</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="text-decoration: none; color: #333;">Menu Item 2</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="text-decoration: none; color: #333;">Menu Item 3</a></li>
          </ul>
        </aside>
      `,
  category: "Layout",
});

blockManager.add("image-block", {
  label: "Image",
  content: {
    type: "image",
    style: { width: "100%" },
  },
  category: "Media",
});

blockManager.add("section-block", {
  label: "Section",
  content: `
    <section style="padding: 20px; background-color: #f8f9fa; border: 1px solid #ddd;">
      <h2 style="font-size: 20px;">Section Title</h2>
      <p style="font-size: 16px;">This is a section block. Add more content here.</p>
    </section>
  `,
  category: "Layout",
});

blockManager.add("card-block", {
  label: "Card",
  content: `
    <div style="border: 1px solid #ddd; border-radius: 5px; padding: 20px;">
      <h3 style="margin-top: 0;">Card Title</h3>
      <p>This is a card. Add additional content here.</p>
      <button style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px;">Button</button>
    </div>
  `,
  category: "Layout",
});
