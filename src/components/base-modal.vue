<template>
    <portal to="modals">
        <div class="modal-backdrop z-70 w-full scrolling-touch p-3 lg:p-8 xl:p-8" @click.self="$emit('close')">
            <div class="modal overflow-hidden">
                <div class="flex flex-col w-full">
                    <div class="h-32 md:h-24 relative flex items-center justify-center flex-col bg-white header-bg"  v-if="$slots.header">
                      <img class="absolute w-5 m-3 cursor-pointer" style="transform: rotate(45deg); top: 0; right: 0;"
                           @click="$emit('close')" src="@/assets/plus.svg" alt="">
                        <div class="text-white font-medium px-4 text-center">
                           <slot name="header"></slot>
                        </div>
                    </div>
                    <div class="bg-white pt-16 -mt-16">
                        <slot></slot>
                    </div>

                    <slot name="footer"></slot>
                </div>
            </div>
        </div>

    </portal>
</template>

<script>
export default {
  name: 'modal',
  // props: {
  //   wide: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
};
</script>

<style scoped>
    .header-bg {
        border-radius:  0 0 50% 50%;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal {
        margin-left: auto;
        margin-right: auto;
        max-width: 450px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal.wide {
        max-width: 655px;
        width: 100%;
    }

    .modal {
        border-radius: 0.85rem;
        -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
        0 5px 15px 0 rgba(0, 0, 0, 0.08);
        box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
        0 5px 15px 0 rgba(0, 0, 0, 0.08);
    }


</style>
