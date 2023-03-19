from RPA.Desktop.OperatingSystem import OperatingSystem

def get_computer_information():
    ops = OperatingSystem()
    print(f"Boot time    : { ops.get_boot_time(as_datetime=True) }\n"
          f"Machine name : { ops.get_machine_name() }\n"
          f"Username     : { ops.get_username() }\n"
          f"Memory       : { ops.get_memory_stats() }\n")

if __name__ == "__main__":
    get_computer_information()