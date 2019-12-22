export default function() {
  return [
    {
      id: 1,
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
      content: []
    },
    {
      id: 2,
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
      content: []
    },
    {
      id: 3,
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
      content: []
    },
    {
      id: 4,
      title: "Page",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "#",
      htmlAfter: '<i class="fas fa-chevron-down"></i>',
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
      id: 12,
      title: "All Tour",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/tours",
      content: []
    },
    {
      id: 13,
      title: "Add New Tour",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-tour",
      content: []
    },

    {
      id: 7,
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
      content: []
    },
    {
      id: 8,
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
      content: []
    },
    {
      id: 9,
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
      content: []
    },
    {
      id: 10,
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
      content: []
    }
  ];
}
