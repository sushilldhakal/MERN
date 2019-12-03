export default function() {
  return [
    {
      id: 1,
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      id: 2,
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts"
    },
    {
      id: 3,
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post"
    },
    {
      id: 4,
      title: "Page",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "#",
      content: [
        {
          id: 5,
          title: "All Page",
          htmlBefore: '<i class="material-icons">vertical_split</i>',
          to: "/pages"
        },
        {
          id: 6,
          title: "Add New Page",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-page"
        }
      ]
    },
    {
      id: 7,
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview"
    },
    {
      id: 8,
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables"
    },
    {
      id: 9,
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite"
    },
    {
      id: 10,
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors"
    }
  ];
}
