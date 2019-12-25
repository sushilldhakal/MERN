export default function() {
  return [
    {
      id: 0,
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
      content: []
    },
    {
      id: 1,
      title: "Blog",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "#",
      htmlAfter: '<i class="fas fa-chevron-down"></i>',
      content: [
        {
          id: 1.1,
          title: "Blog Posts",
          htmlBefore: '<i class="material-icons">vertical_split</i>',
          to: "/blog-posts"
        },
        {
          id: 1.2,
          title: "Add New Post",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-post"
        }
      ]
    },
    {
      id: 2,
      title: "Page",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "#",
      htmlAfter: '<i class="fas fa-chevron-down"></i>',
      content: [
        {
          id: 2.1,
          title: "All Page",
          htmlBefore: '<i class="material-icons">vertical_split</i>',
          to: "/pages"
        },
        {
          id: 2.2,
          title: "Add New Page",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-page"
        }
      ]
    },
    {
      id: 3,
      title: "Tours",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "#",
      htmlAfter: '<i class="fas fa-chevron-down"></i>',
      content: [
        {
          id: 3.1,
          title: "All Tour",
          htmlBefore: '<i class="material-icons">vertical_split</i>',
          to: "/tours"
        },
        {
          id: 3.2,
          title: "Add New Tour",
          htmlBefore: '<i class="material-icons">note_add</i>',
          to: "/add-new-tour"
        }
      ]
    }
    // {
    //   id: 7,
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    //   content: []
    // },
    // {
    //   id: 8,
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    //   content: []
    // },
    // {
    //   id: 9,
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite",
    //   content: []
    // },
    // {
    //   id: 10,
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    //   content: []
    // }
  ];
}
